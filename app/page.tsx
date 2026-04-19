import Link from 'next/link';
import type { Metadata } from 'next';
import CategoryCard from '@/components/CategoryCard';
import PromptCard from '@/components/PromptCard';
import AdUnit from '@/components/AdUnit';
import HangulSearch from '@/components/HangulSearch';
import { CATEGORIES, getAllPrompts } from '@/lib/data';
import { ASCII_CATEGORIES } from '@/lib/ascii-data';

export const metadata: Metadata = {
  title: 'PromptCopy — Free AI Prompts & ASCII Art Copy-Paste Library',
  description:
    'Browse and copy free AI prompts for image generation, Claude document layouts, and 1000+ ASCII symbols. Instant copy-paste for creators worldwide.',
};

export default function HomePage() {
  const allPrompts = getAllPrompts();
  const recentPrompts = allPrompts.slice(0, 8);
  const searchablePrompts = allPrompts.map(({ slug, title, description, tags, category }) => ({
    slug, title, description, tags, category,
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50/50 to-white pt-14 pb-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            ✦ Free Copy-Paste Prompts & ASCII Art
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            The Prompt Library for{' '}
            <span className="text-indigo-600">Every Creator</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto">
            Discover curated AI prompts for image generation and document design,
            plus a massive library of copy-paste ASCII symbols. All free, all instant.
          </p>
          <div className="w-full mb-6">
            <HangulSearch prompts={searchablePrompts} />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/category/image-generation"
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
            >
              Browse Image Prompts
            </Link>
            <Link
              href="/ascii"
              className="px-5 py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:border-indigo-200 hover:text-indigo-600 transition-colors"
            >
              ASCII Art Library ✦
            </Link>
          </div>
        </div>
      </section>

      {/* Ad - Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdUnit slot="1234567890" format="horizontal" className="w-full" />
      </div>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Browse by Category</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Recent Prompts */}
      {recentPrompts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Latest Prompts</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentPrompts.map((prompt) => {
              const cat = CATEGORIES.find(c => c.slug === prompt.category);
              return (
                <PromptCard key={prompt.slug} prompt={prompt} categoryName={cat?.name} />
              );
            })}
          </div>
        </section>
      )}

      {/* ASCII Shortcuts */}
      <section className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Popular ASCII Art</h2>
              <p className="text-sm text-gray-500 mt-1">Click any category to browse and copy</p>
            </div>
            <Link href="/ascii" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {ASCII_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/ascii/${cat.slug}`}
                className="bg-white border border-gray-100 rounded-xl p-4 text-center card-hover shadow-sm group"
              >
                <div className="text-3xl mb-2 font-mono">{cat.icon}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{cat.items.length} chars</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why PromptCopy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why PromptCopy?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every prompt is hand-crafted and tested — not scraped or AI-generated without editing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '⚡',
              title: 'Instant Copy',
              desc: 'One click copies the full prompt to your clipboard. No sign-up, no friction, no cost.',
            },
            {
              icon: '✦',
              title: 'Original Prompts',
              desc: 'Every prompt is written and tested by our team. Optimized for best results in each AI tool.',
            },
            {
              icon: '🌍',
              title: 'For Every Creator',
              desc: 'Whether you\'re a designer, marketer, writer, or student — there\'s a prompt for your project.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <AdUnit slot="0987654321" format="horizontal" className="w-full" />
      </div>
    </div>
  );
}
