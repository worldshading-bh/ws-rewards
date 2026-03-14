import { cn } from "@/utils/cn";

export function GlassCard({
  children,
  className
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "glass-surface premium-outline rounded-[2rem] border border-gray-200/90 bg-white/90 p-5 shadow-luxury transition duration-300 dark:border-white/10 dark:bg-[var(--surface)]/90",
        className
      )}
    >
      {children}
    </div>
  );
}
