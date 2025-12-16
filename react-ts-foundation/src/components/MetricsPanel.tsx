type Props = {
  lcpMs: number | null;
  lcpRating: string | null;
  lcpElement: string | null;
};

export function MetricsPanel({ lcpMs, lcpRating, lcpElement }: Props) {
  return (
    <div style={{ marginTop: 16, padding: 12, border: "1px solid #ddd", borderRadius: 12 }}>
      <h2 style={{ marginTop: 0 }}>Metrics (this page load)</h2>
      <ul style={{ margin: 0 }}>
        <li><strong>LCP:</strong> {lcpMs ? `${lcpMs} ms` : "—"}</li>
        <li><strong>Rating:</strong> {lcpRating ?? "—"} (good / needs-improvement / poor)</li>
        <li><strong>LCP element:</strong> {lcpElement ?? "—"}</li>
      </ul>
    </div>
  );
}
