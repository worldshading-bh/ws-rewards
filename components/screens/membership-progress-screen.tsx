"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LockKeyhole, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StarRating } from "@/components/ui/star-rating";
import { MembershipProgress } from "@/types/customer";

export function MembershipProgressScreen({ progress }: { progress: MembershipProgress }) {
  const nextStarTarget = progress.totalSales + progress.remainingToNextStar;

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-5"
    >
      <GlassCard className="space-y-5 rounded-[2rem] p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-gray-500 dark:text-zinc-400">Membership progress</p>
            <div className="mt-2 flex items-center gap-3">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-gray-900 dark:text-white">{progress.currentTier}</h2>
              <StarRating value={progress.currentStars} size="md" />
            </div>
          </div>
          <p className="rounded-full border border-gold/20 bg-gold/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            {progress.currentDiscount}% live
          </p>
        </div>

        <div className="space-y-3 rounded-[1.5rem] border border-gray-200/90 bg-gray-50/90 p-4 dark:border-white/10 dark:bg-black/15">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{progress.totalSales} / {nextStarTarget} BHD</p>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-400 dark:text-white/45">{progress.currentTier} progress</p>
          </div>
          <ProgressBar value={progress.progressCurrent} max={progress.progressTarget} />
          <p className="text-sm leading-6 text-gray-500 dark:text-zinc-400">
            {progress.remainingToNextStar} BHD remaining to unlock Star {progress.currentStars + 1}.
          </p>
        </div>
      </GlassCard>

      <GlassCard className="rounded-[1.95rem] p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[-0.02em] text-gray-900 dark:text-white">Benefit ladder</p>
            <p className="text-sm text-gray-500 dark:text-zinc-400">Current tier benefits only, with locked milestones dimmed until unlocked.</p>
          </div>
        </div>
        <div className="space-y-3">
          {progress.visibleBenefits.map((benefit, index) => {
            const unlocked = benefit.star <= progress.currentStars;

            return (
              <motion.div
                key={benefit.star}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.28 }}
                className={unlocked ? "rounded-[1.3rem] border border-gold/15 bg-gold/[0.08] px-4 py-4 shadow-[0_0_20px_rgba(200,167,91,0.08)]" : "rounded-[1.3rem] border border-gray-200/90 bg-white/65 px-4 py-4 opacity-90 dark:border-white/10 dark:bg-white/[0.03] dark:opacity-85"}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={unlocked ? "flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/12 text-gold gold-glow" : "flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/[0.04] dark:text-white/40"}>
                      <StarRating value={unlocked ? 1 : 0} total={1} size="sm" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Star {benefit.star} - {benefit.discount}% discount</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-white/45">{benefit.salesRequired} BHD milestone</p>
                    </div>
                  </div>
                  <div className={unlocked ? "inline-flex items-center gap-2 text-gold" : "inline-flex items-center gap-2 text-gray-400 dark:text-white/45"}>
                    {unlocked ? <CheckCircle2 className="h-4 w-4" /> : <LockKeyhole className="h-4 w-4" />}
                    <span className="text-xs font-medium uppercase tracking-[0.2em]">{unlocked ? "Unlocked" : "Locked"}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </GlassCard>

      <div className="space-y-4">
        {progress.tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <GlassCard className="rounded-[1.75rem] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{tier.name}</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">Unlock threshold {tier.threshold} BHD</p>
                </div>
                <StarRating value={tier.stars} total={tier.totalStars} size="lg" />
              </div>
              {tier.unlocked ? (
                <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-zinc-400">Your active tier. Complete all five stars to move toward {progress.nextTierName}.</p>
              ) : (
                <div className="mt-4 flex items-start gap-3 rounded-[1.2rem] border border-gray-200/90 bg-white/65 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
                  <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-sm leading-6 text-gray-500 dark:text-zinc-400">{tier.teaser}</p>
                </div>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
