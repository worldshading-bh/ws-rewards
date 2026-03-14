import { AuthGate } from "@/components/auth/auth-gate";
import { BottomNavigation } from "@/components/navigation/bottom-navigation";

export default function MemberLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGate>
      <div className="page-shell safe-px safe-pb nav-safe-space relative">
        {children}
        <BottomNavigation />
      </div>
    </AuthGate>
  );
}
