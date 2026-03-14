import { AppHeader } from "@/components/layout/app-header";
import { PointsScreen } from "@/components/screens/points-screen";
import { getCustomerOverview } from "@/services/mock-api";

export const revalidate = 3600;

export default async function PointsPage() {
  const overview = await getCustomerOverview();

  return (
    <main className="flex flex-1 flex-col gap-6 py-6">
      <AppHeader eyebrow="Sales" title="Spending and invoices" subtitle="View total purchase value and a lightweight history of your most recent invoices." />
      <PointsScreen totalSales={overview.totalSales} invoices={overview.invoices} />
    </main>
  );
}

