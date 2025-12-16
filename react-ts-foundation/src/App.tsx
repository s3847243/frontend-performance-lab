import { Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ImageLab = lazy(() => import("./pages/ImageLab"));

export default function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: 12, padding: 12 }}>
        <Link to="/">Dashboard</Link>
        <Link to="/image-lab">Image Lab</Link>
      </nav>

      <Suspense fallback={<div style={{ padding: 12 }}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/image-lab" element={<ImageLab />} />
        </Routes>
      </Suspense>
    </div>
  );
}
