import "./globals.css";
import { Instrument_Serif, Manrope } from "next/font/google";
import Link from "next/link";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={`${display.className} ${body.variable}`}>
      <body>
        <div className="site-wrapper">
          <header className="site-header">
            <Link href="/" className="brand">
              Agentic Atelier
            </Link>
            <nav>
              <a href="#canvas">Canvas</a>
              <a href="#ideas">Ideas</a>
              <a href="#about">About</a>
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <span>© {year} Agentic Atelier</span>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="vercel-link"
            >
              Deployed on Vercel
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
