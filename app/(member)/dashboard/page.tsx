import { AppHeader } from "@/components/layout/app-header";
import { DashboardSummary } from "@/components/screens/dashboard-summary";
import { getCustomerOverview } from "@/services/mock-api";

export const revalidate = 3600;

export default async function DashboardPage() {
  const data = await getCustomerOverview();

  return (
    <main className="flex flex-1 flex-col gap-6 py-6">
      <AppHeader eyebrow="World Shading" title={`Welcome back, ${data.customer.split(" ")[0]}`} subtitle="Your membership tier, current discount, and next reward unlocks at a glance." />
      <DashboardSummary data={data} />
    </main>
  );
}

