function expensiveFormat(n: number) {
  // tiny CPU cost (fast enough, but noticeable on throttling)
  let x = 0;
  for (let i = 0; i < 800; i++) x += Math.sqrt(i + n);
  return x.toFixed(0);
}

export function App() {
  const jobs = Array.from({ length: 800 }, (_, i) => ({
    id: String(i + 1),
    title: `Job #${i + 1}`,
    location: i % 2 === 0 ? "Melbourne" : "Remote",
    score: expensiveFormat(i),
  }));

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <h1>Job Listings</h1>
      <p style={{ opacity: 0.8 }}>
        SSR should show content earlier; CSR must wait for JS to render.
      </p>

      <ul style={{ paddingLeft: 18 }}>
        {jobs.map((j) => (
          <li key={j.id} style={{ margin: "10px 0" }}>
            <strong>{j.title}</strong> — {j.location} — score {j.score}
          </li>
        ))}
      </ul>

      <button
        onClick={() => alert("Hydration works ✅")}
        style={{ marginTop: 16, padding: "10px 14px", borderRadius: 10 }}
      >
        Click to prove hydration
      </button>
    </main>
  );
}
