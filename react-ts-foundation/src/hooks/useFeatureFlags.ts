import { useState } from "react";
import type { FeatureFlag } from "../types/feature";

export function useFeatureFlags() {
  const [flags, setFlags] = useState<FeatureFlag[]>([
    { id: "dark-mode", name: "Dark Mode", enabled: false },
    { id: "beta-ui", name: "Beta UI", enabled: true },
  ]);

  const toggleFlag = (id: string) => {
    setFlags(flags =>
      flags.map(f =>
        f.id === id ? { ...f, enabled: !f.enabled } : f
      )
    );
  };

  return { flags, toggleFlag };
}
