import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PromptCopy — AI Prompt Library & ASCII Art",
    template: "%s | PromptCopy",
  },
  description:
    "Free copy-paste prompts for AI image generation, Claude document layouts, and ASCII art symbols. Boost your creativity instantly.",
  keywords: ["AI prompts", "prompt library", "ASCII art", "copy paste", "Claude prompts", "image generation", "Nano Banana"],
  metadataBase: new URL("https://saju-todayfortune.com"),
  openGraph: {
    type: "website",
    siteName: "PromptCopy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const NAV_LINKS = [
  { href: "/category/image-generation", label: "Image" },
  { href: "/category/docx-layout", label: "Document" },
  { href: "/category/ppt-layout", label: "Presentation" },
  { href: "/category/card-news", label: "Card News" },
  { href: "/category/excel-layout", label: "Excel" },
  { href: "/ascii", label: "ASCII Art" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* AdSense: uncomment after approval and replace publisher ID
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
        */}
      </head>
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-indigo-600 transition-colors">
                <span className="text-indigo-600 text-xl">✦</span>
                PromptCopy
              </Link>

              <nav className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-1.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="md:hidden">
                <Link href="/ascii" className="text-sm text-indigo-600 font-medium">ASCII ✦</Link>
              </div>
            </div>

            {/* Mobile scrollable nav */}
            <div className="md:hidden flex gap-2 pb-2 overflow-x-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap px-3 py-1 text-xs text-gray-600 hover:text-indigo-600 border border-gray-200 hover:border-indigo-200 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-100 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                  <span className="text-indigo-600">✦</span>
                  PromptCopy
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Free AI prompts and ASCII art for creators worldwide.
                  Copy, paste, create.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">AI Prompts</h4>
                <ul className="space-y-2">
                  {NAV_LINKS.slice(0, 4).map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">ASCII Art</h4>
                <ul className="space-y-2">
                  {["hearts", "stars", "arrows", "text-faces", "symbols", "borders"].map(slug => (
                    <li key={slug}>
                      <Link href={`/ascii/${slug}`} className="text-sm text-gray-500 hover:text-indigo-600 transition-colors capitalize">
                        {slug.replace('-', ' ')}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Site</h4>
                <ul className="space-y-2">
                  {[
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                    { href: "/privacy-policy", label: "Privacy Policy" },
                    { href: "/terms", label: "Terms of Service" },
                  ].map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 text-center">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} PromptCopy. All prompts are original works.
                For educational and creative use only.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
