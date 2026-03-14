"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type ProgressBarProps = {
  value: number;
  max: number;
  className?: string;
};

export function ProgressBar({ value, max, className }: ProgressBarProps) {
  const percentage = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={cn("relative h-4 overflow-hidden rounded-full border border-gray-200 bg-gray-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.65),transparent_42%)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_42%)]" />
      <motion.div
        className="relative h-full rounded-full bg-[linear-gradient(90deg,#F1CC7A_0%,#C8A75B_18%,#ec5638_68%,#f7774e_100%)] shadow-[0_0_22px_rgba(200,167,91,0.28)]"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent via-white/55 to-transparent blur-sm" />
      </motion.div>
    </div>
  );
}
