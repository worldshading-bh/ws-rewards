import Link from "next/link";
import { WifiOff } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function OfflinePage() {
  return (
    <main className="page-shell safe-px safe-pb justify-center py-10">
      <GlassCard className="mx-auto flex w-full flex-col items-center gap-4 p-8 text-center shadow-luxury">
        <div className="rounded-full bg-brand/10 p-4 text-brand">
          <WifiOff className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">You&apos;re offline</h1>
          <p className="text-sm text-[var(--muted)]">
            WS Rewards is still available with cached content. Reconnect to refresh your latest membership status, benefits, and sales activity.
          </p>
        </div>
        <Link
          href="/dashboard"
          className="rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition hover:opacity-90"
        >
          Return to app
        </Link>
      </GlassCard>
    </main>
  );
}

