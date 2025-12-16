import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
