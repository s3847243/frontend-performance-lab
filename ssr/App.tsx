export function App() {
  const jobs = [
    { id: "1", title: "Frontend Engineer", location: "Melbourne" },
    { id: "2", title: "Full-stack Engineer", location: "Remote" },
    { id: "3", title: "Platform Engineer", location: "Sydney" },
  ];

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <h1>Job Listings</h1>
      <p style={{ opacity: 0.8 }}>
        This page is server-rendered (SSR) and then hydrated on the client.
      </p>

      <ul style={{ paddingLeft: 18 }}>
        {jobs.map((j) => (
          <li key={j.id} style={{ margin: "10px 0" }}>
            <strong>{j.title}</strong> — {j.location}
          </li>
        ))}
      </ul>

      <button
        onClick={() => alert("Hydration works ✅ (click handler running on client)")}
        style={{ marginTop: 16, padding: "10px 14px", borderRadius: 10 }}
      >
        Click to prove hydration
      </button>
    </main>
  );
}
