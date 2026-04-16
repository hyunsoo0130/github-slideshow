import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PromptCard from '@/components/PromptCard';
import AdUnit from '@/components/AdUnit';
import { CATEGORIES, getPromptsByCategory, getCategoryBySlug } from '@/lib/data';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.filter(c => c.slug !== 'ascii-art').map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} Prompts`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category || category.slug === 'ascii-art') notFound();

  const prompts = getPromptsByCategory(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl shadow-sm flex-shrink-0`}>
          {category.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{category.name} Prompts</h1>
          <p className="text-gray-500 max-w-xl">{category.description}</p>
        </div>
      </div>

      {/* Ad */}
      <AdUnit slot="1111111111" format="horizontal" className="w-full mb-8" />

      {/* Prompts Grid */}
      {prompts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-4">✦</p>
          <p className="text-lg font-medium text-gray-600">Prompts coming soon</p>
          <p className="text-sm mt-2">We&apos;re writing original prompts for this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {prompts.map((prompt) => (
            <PromptCard key={prompt.slug} prompt={prompt} />
          ))}
        </div>
      )}

      {/* Related Categories */}
      <div className="mt-14">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Other Categories</h2>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.filter(c => c.slug !== slug && c.slug !== 'ascii-art').map(cat => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:border-indigo-200 hover:text-indigo-600 transition-colors"
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
          <Link
            href="/ascii"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:border-indigo-200 hover:text-indigo-600 transition-colors"
          >
            ✦ ASCII Art
          </Link>
        </div>
      </div>
    </div>
  );
}
