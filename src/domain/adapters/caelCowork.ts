/**
 * The verified, local handoff into Claude Desktop's Cowork surface for Cael.
 *
 * This is intentionally a launch seam, not a delivery adapter: the deep link
 * attaches the trusted Outpost Cael folder, but it does not submit a prompt or
 * compel Cael to respond. Cael's own arrival documents and Operator Note reader
 * remain responsible for interpreting any pending invitation.
 */
const CAEL_COWORK_FOLDER = "/Users/chris/Documents/Claude/Projects/Outpost Cael";

export const caelCoworkLaunch = {
  label: "Open Cael",
  folderLabel: "Outpost Cael",
  summary: "Open a new local Cowork surface with Cael's project folder attached.",
  limitation: "Cowork may ask to confirm the folder. It opens context only; it does not send a message or require a response.",
  href: `claude://cowork/new?source=hug&folder=${encodeURIComponent(CAEL_COWORK_FOLDER)}`
} as const;
