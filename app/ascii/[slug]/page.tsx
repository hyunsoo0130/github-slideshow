import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import AsciiCard from '@/components/AsciiCard';
import AdUnit from '@/components/AdUnit';
import { ASCII_CATEGORIES, getAsciiCategoryBySlug } from '@/lib/ascii-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ASCII_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getAsciiCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${cat.name} — Copy and Paste ASCII Symbols`,
    description: cat.description,
  };
}

export default async function AsciiCategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getAsciiCategoryBySlug(slug);
  if (!cat) notFound();

  const others = ASCII_CATEGORIES.filter(c => c.slug !== slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/ascii" className="hover:text-indigo-600 transition-colors">ASCII Art</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{cat.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-2xl font-mono shadow-sm flex-shrink-0 text-white">
          {cat.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{cat.name}</h1>
          <p className="text-gray-500 max-w-xl">{cat.description}</p>
          <p className="text-sm text-indigo-600 font-medium mt-1">
            {cat.items.length} characters — click any to copy
          </p>
        </div>
      </div>

      {/* Ad */}
      <AdUnit slot="6666666666" format="horizontal" className="w-full mb-8" />

      {/* How to use */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4 mb-8 flex items-center gap-3">
        <span className="text-2xl">👆</span>
        <div className="text-sm text-indigo-800">
          <strong>How to copy:</strong> Click the copy button on any character card to instantly copy it to your clipboard.
          Then paste (Ctrl+V / Cmd+V) anywhere — chat, documents, social media, design tools.
        </div>
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {cat.items.map((item, i) => (
          <AsciiCard key={i} char={item.char} name={item.name} />
        ))}
      </div>

      {/* SEO content block */}
      <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          About {cat.name} Symbols
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {cat.description} These characters are fully compatible with Unicode and can be used
          anywhere that accepts text input — including social media platforms like Twitter, Instagram,
          Facebook, TikTok, and Discord; messaging apps like WhatsApp, Telegram, and iMessage;
          word processors like Microsoft Word and Google Docs; and design tools like Canva and Figma.
          Simply click the copy button on any character, then paste it into your desired application.
          No special software or fonts required.
        </p>
      </div>

      {/* Mid ad */}
      <AdUnit slot="7777777777" format="rectangle" className="mx-auto mt-8 mb-8" />

      {/* Other Categories */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">More ASCII Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {others.map(other => (
            <Link
              key={other.slug}
              href={`/ascii/${other.slug}`}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-indigo-200 hover:text-indigo-600 transition-colors group"
            >
              <span className="text-xl font-mono">{other.icon}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                {other.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
