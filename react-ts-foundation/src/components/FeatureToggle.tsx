import type { FeatureFlag } from "../types/feature";
type Props = {
  flag: FeatureFlag;
  onToggle: (id: string) => void;
};

export function FeatureToggle({ flag, onToggle }: Props) {
  return (
    <div>
      <span>{flag.name}</span>
      <button onClick={() => onToggle(flag.id)}>
        {flag.enabled ? "ON" : "OFF"}
      </button>
    </div>
  );
}
