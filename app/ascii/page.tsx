import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';
import { ASCII_CATEGORIES } from '@/lib/ascii-data';

export const metadata: Metadata = {
  title: 'ASCII Art & Symbol Library — Copy and Paste',
  description:
    'Browse 1000+ ASCII symbols, emoticons, and art. Hearts, stars, arrows, text faces, borders, and more. Click to copy instantly.',
};

export default function AsciiIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          ✦ Copy-Paste ASCII Library
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          ASCII Art & Symbol Library
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Browse over 1,000 ASCII characters, symbols, emoticons, and art.
          Click any character to copy it instantly — no sign-up required.
        </p>
      </div>

      {/* Ad */}
      <AdUnit slot="4444444444" format="horizontal" className="w-full mb-8" />

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ASCII_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/ascii/${cat.slug}`}
            className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 card-hover shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl font-mono">{cat.icon}</span>
              <div>
                <h2 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h2>
                <p className="text-xs text-gray-400">{cat.items.length} characters</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{cat.description}</p>

            {/* Preview chars */}
            <div className="flex flex-wrap gap-1.5">
              {cat.items.slice(0, 5).map((item, i) => (
                <span
                  key={i}
                  className="text-lg font-mono bg-gray-50 border border-gray-100 rounded-lg px-2 py-1 text-gray-700"
                >
                  {item.char.length > 4 ? item.char.slice(0, 3) + '…' : item.char}
                </span>
              ))}
              <span className="text-xs text-gray-400 self-center pl-1">+more</span>
            </div>

            <div className="text-xs font-medium text-indigo-500 group-hover:text-indigo-700 flex items-center gap-1">
              View all {cat.items.length}
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* What is ASCII section — for SEO */}
      <div className="mt-14 bg-gray-50 rounded-2xl p-8 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What is ASCII Art?</h2>
        <div className="prose prose-sm text-gray-600 max-w-none space-y-3">
          <p>
            ASCII art is a graphic design technique that uses printable characters from the ASCII standard to create images, symbols, and decorative text. Originally developed for early computers and terminals, ASCII art has evolved into a popular form of digital expression used in chat messages, social media bios, emails, and creative writing.
          </p>
          <p>
            Today, &ldquo;ASCII art&rdquo; broadly refers to any text-based symbol or decorative character — including Unicode symbols, special characters, emoticons, and Japanese kaomoji (顔文字). These characters can be copied and pasted into virtually any text field, making them universally accessible.
          </p>
          <p>
            Our library includes hearts ♥, stars ★, arrows →, borders ═══, text faces ( ͡° ͜ʖ ͡°), animal faces (=^.^=), check marks ✓, currency symbols ₩€£¥, mathematical symbols ∞±≈, and much more. Browse by category and copy any character with a single click.
          </p>
        </div>
      </div>

      {/* Bottom ad */}
      <AdUnit slot="5555555555" format="horizontal" className="w-full mt-8" />
    </div>
  );
}
