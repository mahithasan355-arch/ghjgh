import ClientOnly from "./client-only";

// A single optional catch-all route renders the client SPA for every path so
// React Router can handle navigation. Deep links + refreshes resolve here.
export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly />;
}
