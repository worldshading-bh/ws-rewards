"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { PointsCard } from "@/components/ui/points-card";
import { InvoiceSummary } from "@/types/customer";

export function PointsScreen({
  totalSales,
  invoices
}: {
  totalSales: number;
  invoices: InvoiceSummary[];
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-4"
    >
      <GlassCard className="rounded-[1.9rem] p-5">
        <p className="text-xs uppercase tracking-[0.26em] text-gray-400 dark:text-white/45">Total sales</p>
        <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-gray-900 dark:text-white">{totalSales} BHD</p>
        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-zinc-400">This value is used by ERPNext to determine your active tier and star progression.</p>
      </GlassCard>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3 px-1">
          <p className="text-sm font-medium text-gray-900 dark:text-white">Recent invoices</p>
          <p className="text-xs uppercase tracking-[0.22em] text-gold/85">Last {invoices.length}</p>
        </div>
        {invoices.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <PointsCard item={item} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
