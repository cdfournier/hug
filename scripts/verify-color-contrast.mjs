import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const contractPath = resolve("design/tokens/color.contract.json");
const contract = JSON.parse(readFileSync(contractPath, "utf8"));
const themes = contract.exploration?.themeValues;

if (!themes?.light || !themes?.dark) {
  throw new Error("Expected exploration.themeValues for light and dark themes.");
}

const checks = [
  { label: "content.primary on surface.0", foreground: "content.primary", background: "surface.0" },
  { label: "content.primary on surface.1", foreground: "content.primary", background: "surface.1" },
  { label: "content.secondary on surface.0", foreground: "content.secondary", background: "surface.0" },
  { label: "content.inverse on action.primary.default", foreground: "content.inverse", background: "action.primary.default" }
];

const srgbToLinear = (channel) =>
  channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;

const relativeLuminance = (hex) => {
  if (!/^#[\dA-F]{6}$/i.test(hex)) {
    throw new Error(`Expected a six-digit hex color; received ${JSON.stringify(hex)}.`);
  }

  const channels = [1, 3, 5].map((index) =>
    srgbToLinear(Number.parseInt(hex.slice(index, index + 2), 16) / 255)
  );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};

const contrastRatio = (foreground, background) => {
  const [lighter, darker] = [relativeLuminance(foreground), relativeLuminance(background)].sort(
    (left, right) => right - left
  );

  return (lighter + 0.05) / (darker + 0.05);
};

let failed = false;

for (const [themeName, values] of Object.entries(themes)) {
  for (const check of checks) {
    const foreground = values[check.foreground];
    const background = values[check.background];

    if (!foreground || !background) {
      throw new Error(`${themeName}: missing ${!foreground ? check.foreground : check.background}.`);
    }

    const ratio = contrastRatio(foreground, background);
    const passed = ratio >= 4.5;
    failed ||= !passed;
    console.log(`${passed ? "PASS" : "FAIL"} ${themeName.padEnd(5)} ${check.label}: ${ratio.toFixed(2)}:1`);
  }
}

if (failed) {
  process.exitCode = 1;
}
