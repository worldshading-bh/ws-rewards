"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type StarRatingProps = {
  value: number;
  total?: number;
  size?: "sm" | "md" | "lg";
};

const STAR_PATH =
  "M12 2.75L14.95 8.73L21.55 9.69L16.77 14.35L17.9 20.93L12 17.83L6.1 20.93L7.23 14.35L2.45 9.69L9.05 8.73L12 2.75Z";

export function StarRating({ value, total = 5, size = "md" }: StarRatingProps) {
  const sizeClass = {
    sm: "h-4 w-4",
    md: "h-[18px] w-[18px]",
    lg: "h-5 w-5"
  }[size];

  return (
    <div className="flex items-center gap-1.5" aria-label={`${value} of ${total} stars`}>
      {Array.from({ length: total }, (_, index) => {
        const achieved = index < value;
        const gradientId = `star-gradient-${size}-${index}`;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 4 }}
            animate={{ opacity: 1, scale: achieved ? 1.04 : 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.32, ease: "easeOut" }}
            className={cn(achieved ? "gold-glow" : "opacity-40")}
          >
            <motion.svg
              viewBox="0 0 24 24"
              className={cn(sizeClass, achieved ? "animate-[breathe-glow_2.8s_ease-in-out_infinite]" : "")}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id={gradientId} x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F6D488" />
                  <stop offset="0.52" stopColor="#C8A75B" />
                  <stop offset="1" stopColor="#8E6A22" />
                </linearGradient>
              </defs>
              <path
                d={STAR_PATH}
                fill={achieved ? `url(#${gradientId})` : "rgba(148, 152, 162, 0.22)"}
                stroke={achieved ? "#F6D488" : "rgba(148, 152, 162, 0.46)"}
                strokeWidth="1.1"
              />
            </motion.svg>
          </motion.div>
        );
      })}
    </div>
  );
}
