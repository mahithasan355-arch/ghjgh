"use client";

import dynamic from "next/dynamic";

// SSR is disabled: the app relies on browser-only APIs (localStorage, canvas,
// WebAssembly/Pyodide) and React Router's history, so it must render client-side.
const AppClient = dynamic(() => import("../app-client"), { ssr: false });

export default function ClientOnly() {
  return <AppClient />;
}
