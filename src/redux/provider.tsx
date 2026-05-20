"use client";

import React, { useEffect, useState } from "react";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by only rendering after mount
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
