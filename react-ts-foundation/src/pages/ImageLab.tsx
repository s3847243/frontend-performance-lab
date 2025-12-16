import { useEffect, useMemo, useState } from "react";
import { startLcpTracking } from "../perf/webVitals";
import { useSearchParams } from "react-router-dom";
import { ImageCase } from "../components/ImageCase";
import { MetricsPanel } from "../components/MetricsPanel";
type Mode = "baseline" | "optimized";

export default function ImageLab() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialMode = (searchParams.get("mode") as Mode) || "baseline";
  const [mode, setMode] = useState<Mode>(initialMode);

  // keep URL in sync when mode changes
  useEffect(() => {
    setSearchParams({ mode });
  }, [mode, setSearchParams]);

  const [lcpMs, setLcpMs] = useState<number | null>(null);
  const [lcpRating, setLcpRating] = useState<string | null>(null);
  const [lcpElement, setLcpElement] = useState<string | null>(null);

  useEffect(() => {
    startLcpTracking((r) => {
      setLcpMs(r.value);
      setLcpRating(r.rating);
      setLcpElement(r.element ?? null);
    });
  }, []);

  const note = useMemo(() => {
    return mode === "baseline"
      ? "Baseline: single large JPG (no picture/srcset)."
      : "Optimized: picture (AVIF/WebP fallback) + srcset + proper sizing.";
  }, [mode]);

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
      <h1>Image Optimization Lab</h1>

<div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <label>
          <input
            type="radio"
            checked={mode === "baseline"}
            onChange={() => setMode("baseline")}
          />{" "}
          Baseline
        </label>
        <label>
          <input
            type="radio"
            checked={mode === "optimized"}
            onChange={() => setMode("optimized")}
          />{" "}
          Optimized
        </label>

        <button
          onClick={() => window.location.reload()}
          style={{ marginLeft: "auto" }}
          title="Reload to measure LCP fresh"
        >
          Reload page (fresh LCP)
        </button>
      </div>


      <p style={{ marginTop: 0, opacity: 0.8 }}>{note}</p>

      <ImageCase mode={mode} />

      <MetricsPanel lcpMs={lcpMs} lcpRating={lcpRating} lcpElement={lcpElement} />

      <div style={{ marginTop: 32 }}>
        <h2>Below the fold (lazy-load examples)</h2>
        <p style={{ opacity: 0.8 }}>
          Scroll down; these should not load immediately in optimized setups.
        </p>

        <div style={{ height: 600 }} />

        <img
          src="/src/assets/images/hero/hero-800.jpg"
          loading="lazy"
          style={{ width: "100%", borderRadius: 12 }}
          alt="Below fold sample"
        />

        <div style={{ height: 800 }} />
      </div>
    </div>
  );
}
