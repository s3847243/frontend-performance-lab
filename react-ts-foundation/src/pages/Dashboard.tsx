import { FeatureToggle } from "../components/FeatureToggle";
import { useFeatureFlags } from "../hooks/useFeatureFlags";

export default function Dashboard() {
  const { flags, toggleFlag } = useFeatureFlags();
  const loadHeavyUtil = async () => {
  const { expensiveCalculation } = await import("../utils/heavy");
    console.log(expensiveCalculation());
  };



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

      <br>
      </br>
      <button onClick={loadHeavyUtil}>
        Run Expensive Calculation
      </button>
    </div>
  );
}
