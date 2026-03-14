import { AppHeader } from "@/components/layout/app-header";
import { MembershipProgressScreen } from "@/components/screens/membership-progress-screen";
import { getMembershipProgress } from "@/services/mock-api";

export const revalidate = 3600;

export default async function MembershipPage() {
  const progress = await getMembershipProgress();

  return (
    <main className="flex flex-1 flex-col gap-6 py-6">
      <AppHeader eyebrow="Membership" title="Tier and benefit progression" subtitle="Track your current tier, benefit ladder, and the stars leading to your next upgrade." />
      <MembershipProgressScreen progress={progress} />
    </main>
  );
}

