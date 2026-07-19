import { AppShell } from "../organisms/AppShell";
import { HomeDashboard } from "../organisms/HomeDashboard";

export function HomePage() {
  return (
    <AppShell active="home">
      <HomeDashboard />
    </AppShell>
  );
}
