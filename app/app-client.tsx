"use client";

import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "@/App";

/**
 * Client entry point for the single-page application. The entire Algolume
 * experience (routing, in-browser Python, canvas visualizers) runs on the
 * client, so it's mounted here and rendered with SSR disabled by the page.
 */
export default function AppClient() {
  return (
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  );
}
