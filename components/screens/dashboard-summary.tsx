"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Crown, Gift, Sparkles, WalletCards } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { MembershipCard } from "@/components/ui/membership-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StarRating } from "@/components/ui/star-rating";
import { CustomerOverview } from "@/types/customer";

export function DashboardSummary({ data }: { data: CustomerOverview }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-6"
    >
      <MembershipCard data={data} />

      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="rounded-[1.85rem] p-5">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
            <Crown className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.26em] text-gray-400 dark:text-white/45">Membership tier</p>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white">{data.tier}</p>
          </div>
          <div className="mt-4 border-t border-gray-200/90 pt-4 dark:border-white/10">
            <StarRating value={data.stars} />
          </div>
        </GlassCard>

        <GlassCard className="rounded-[1.85rem] p-5">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
            <WalletCards className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.26em] text-gray-400 dark:text-white/45">Total sales</p>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white">{data.totalSales} BHD</p>
          </div>
          <div className="mt-4 border-t border-gray-200/90 pt-4 dark:border-white/10">
            <p className="text-xs uppercase tracking-[0.24em] text-gold/90">ERPNext verified</p>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="rounded-[1.9rem] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
            <Gift className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-[0.26em] text-gray-400 dark:text-white/45">Current benefit</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white">{data.currentDiscount}% discount</p>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-zinc-400">Active on all eligible World Shading products.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="rounded-[1.9rem] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gray-200/90 bg-gray-50 text-gold dark:border-white/10 dark:bg-white/[0.06]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.26em] text-gray-400 dark:text-white/45">Next benefit unlocks</p>
                <div className="mt-3 space-y-3">
                  {data.nextUnlock.map((unlock) => (
                    <div key={unlock.star} className="flex items-center justify-between gap-3 rounded-[1.2rem] border border-gray-200/90 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Star {unlock.star}</p>
                      <p className="text-sm font-semibold text-gold">{unlock.discount}% discount</p>
                    </div>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gold" />
            </div>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="rounded-[1.9rem] p-5">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-gray-400 dark:text-white/45">Progress to next star</p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white">{data.tier} to Star {data.stars + 1}</p>
            </div>
            <p className="text-sm font-medium text-gold">{data.remainingToNextStar} BHD remaining</p>
          </div>
          <ProgressBar value={data.progressCurrent} max={data.progressTarget} />
          <p className="text-sm leading-6 text-gray-500 dark:text-zinc-400">
            Continue spending to unlock your next benefit and move closer to {data.nextTierName} membership.
          </p>
        </div>
      </GlassCard>
    </motion.section>
  );
}
