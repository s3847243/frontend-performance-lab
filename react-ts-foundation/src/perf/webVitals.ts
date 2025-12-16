import { onLCP, type Metric } from "web-vitals";

type LcpResult = {
  value: number;      
  rating: Metric["rating"];
  element?: string;   
};

export function startLcpTracking(onUpdate: (r: LcpResult) => void) {
  onLCP((metric) => {
    const entry = metric.entries?.[metric.entries.length - 1] as any;
    const el = entry?.element as Element | undefined;

    const elementHint = el
      ? `${el.tagName.toLowerCase()}${el.className ? "." + String(el.className).split(" ").slice(0, 2).join(".") : ""}`
      : undefined;

    onUpdate({
      value: Math.round(metric.value),
      rating: metric.rating,
      element: elementHint,
    });
  }, { reportAllChanges: true });
}
