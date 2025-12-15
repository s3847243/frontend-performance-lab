import { FeatureToggle } from "../components/FeatureToggle";
import { useFeatureFlags } from "../hooks/useFeatureFlags";

export function Dashboard() {
  const { flags, toggleFlag } = useFeatureFlags();

  return (
    <div>
      <h1>Feature Flags</h1>
      {flags.map(flag => (
        <FeatureToggle
          key={flag.id}
          flag={flag}
          onToggle={toggleFlag}
        />
      ))}
    </div>
  );
}
