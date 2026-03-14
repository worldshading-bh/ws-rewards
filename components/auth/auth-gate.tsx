"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const session = window.localStorage.getItem("ws-rewards-session");

    if (!session) {
      router.replace("/");
      return;
    }

    setIsReady(true);
  }, [router]);

  if (!isReady) {
    return (
      <div className="page-shell safe-px safe-pb items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-brand/25 border-t-brand" />
      </div>
    );
  }

  return <>{children}</>;
}
