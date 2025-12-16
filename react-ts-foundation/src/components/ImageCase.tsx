type Props = { mode: "baseline" | "optimized" };

export function ImageCase({ mode }: Props) {
  const commonStyle: React.CSSProperties = {
    width: "100%",
    maxHeight: 420,
    objectFit: "cover",
    borderRadius: 16,
  };

  if (mode === "baseline") {
    // Baseline: always load a big JPG regardless of device size.
    return (
      <div>
        <h2>Hero image</h2>
        <img
          src="/src/assets/images/hero/hero-1600.jpg"
          style={commonStyle}
          alt="Hero (baseline JPG)"
        />
        <p style={{ opacity: 0.8 }}>
          Baseline loads a single large JPG for everyone.
        </p>
      </div>
    );
  }

  // Optimized: modern formats + responsive srcset
  return (
    <div>
      <h2>Hero image</h2>
      <picture>
        <source
          type="image/avif"
          srcSet={[
            "/src/assets/images/hero/hero-400.avif 400w",
            "/src/assets/images/hero/hero-800.avif 800w",
            "/src/assets/images/hero/hero-1600.avif 1600w",
          ].join(", ")}
          sizes="(max-width: 600px) 100vw, 980px"
        />
        <source
          type="image/webp"
          srcSet={[
            "/src/assets/images/hero/hero-400.webp 400w",
            "/src/assets/images/hero/hero-800.webp 800w",
            "/src/assets/images/hero/hero-1600.webp 1600w",
          ].join(", ")}
          sizes="(max-width: 600px) 100vw, 980px"
        />
        <img
          src="/src/assets/images/hero/hero-800.jpg"
          srcSet={[
            "/src/assets/images/hero/hero-400.jpg 400w",
            "/src/assets/images/hero/hero-800.jpg 800w",
            "/src/assets/images/hero/hero-1600.jpg 1600w",
          ].join(", ")}
          sizes="(max-width: 600px) 100vw, 980px"
          style={commonStyle}
          alt="Hero (optimized)"
          fetchPriority="high"
        />
      </picture>

      <p style={{ opacity: 0.8 }}>
        Optimized uses <code>&lt;picture&gt;</code> with AVIF/WebP fallbacks and <code>srcset</code>.
      </p>
    </div>
  );
}
