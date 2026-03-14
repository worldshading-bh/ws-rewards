import { AppHeader } from "@/components/layout/app-header";
import { MembershipCardScreen } from "@/components/screens/membership-card-screen";
import { getCustomerOverview } from "@/services/mock-api";

export const revalidate = 3600;

export default async function CardPage() {
  const data = await getCustomerOverview();

  return (
    <main className="flex flex-1 flex-col gap-6 py-6">
      <AppHeader eyebrow="Digital card" title="Your WS membership identity" subtitle="A premium card carrying your current tier, star status, and membership ID." />
      <MembershipCardScreen data={data} />
    </main>
  );
}

