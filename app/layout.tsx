import type { Metadata, Viewport } from "next";
import "@/index.css";

export const metadata: Metadata = {
  title: "Algolume - Learn Algorithms, Illuminated",
  description:
    "One place to learn algorithms: read it like a book, watch it run, play with it, take notes, and solve problems — all in the browser.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d7dee8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e12" },
  ],
};

// Applies the saved (or system-default) theme before first paint to avoid a
// flash of the wrong theme. Mirrors the original Vite index.html behavior.
const themeScript = `(function(){try{var s=localStorage.getItem("algolume-theme");document.documentElement.classList.toggle("dark",s==="dark");}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-base">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
