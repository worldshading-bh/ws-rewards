import { AppHeader } from "@/components/layout/app-header";
import { ProfileScreen } from "@/components/screens/profile-screen";
import { getCustomerOverview } from "@/services/mock-api";

export const revalidate = 3600;

export default async function ProfilePage() {
  const data = await getCustomerOverview();

  return (
    <main className="flex flex-1 flex-col gap-6 py-6">
      <AppHeader eyebrow="Profile" title="Account and membership status" subtitle="Customer details, current membership standing, and app preferences in one place." />
      <ProfileScreen data={data} />
    </main>
  );
}

