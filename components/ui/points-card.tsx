import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { InvoiceSummary } from "@/types/customer";

export function PointsCard({ item }: { item: InvoiceSummary }) {
  return (
    <GlassCard className="rounded-[1.85rem] border-gray-200/90 p-4 dark:border-white/10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/15 bg-gold/10 text-gold shadow-[0_0_18px_rgba(200,167,91,0.12)]">
            <ArrowUpRight className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">{item.name}</p>
            <p className="mt-1 truncate text-sm text-gray-500 dark:text-zinc-400">Invoice date {item.date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold tracking-[-0.03em] text-gold">{item.amount} BHD</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-400 dark:text-white/45">Sales entry</p>
        </div>
      </div>
    </GlassCard>
  );
}
