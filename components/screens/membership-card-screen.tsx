"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ScanLine, ShieldCheck } from "lucide-react";
import { MembershipCard } from "@/components/ui/membership-card";
import { GlassCard } from "@/components/ui/glass-card";
import { StarRating } from "@/components/ui/star-rating";
import { CustomerOverview } from "@/types/customer";

export function MembershipCardScreen({ data }: { data: CustomerOverview }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-5"
    >
      <div className="px-1">
        <MembershipCard data={data} />
      </div>
      <GlassCard className="rounded-[2rem] p-5">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-zinc-400">Digital membership card</p>
              <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">WS Rewards Member</p>
              <div className="mt-2 flex items-center gap-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{data.tier}</p>
                <StarRating value={data.stars} size="sm" />
              </div>
            </div>
          </div>

          <div className="rounded-[1.9rem] border border-gray-200/90 bg-[var(--surface-strong)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="flex items-center justify-center rounded-[1.6rem] border border-dashed border-brand/40 bg-gradient-to-br from-brand/5 via-gold/5 to-transparent p-6 dark:from-white/10 dark:via-transparent dark:to-transparent">
              <div className="flex flex-col items-center gap-3 text-brand">
                <ScanLine className="h-12 w-12" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Scan this code in store</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-[1.2rem] border border-gray-200/90 bg-white/75 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <p className="text-sm text-gray-500 dark:text-zinc-400">Member ID {data.membershipId}</p>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.section>
  );
}
