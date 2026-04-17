import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CopyButton from '@/components/CopyButton';
import AdUnit from '@/components/AdUnit';
import PromptCard from '@/components/PromptCard';
import { getAllPrompts, getPromptBySlug, getCategoryBySlug, getPromptsByCategory } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPrompts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) return {};
  return {
    title: prompt.title,
    description: prompt.description,
  };
}

export default async function PromptPage({ params }: Props) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) notFound();

  const category = getCategoryBySlug(prompt.category);
  const related = getPromptsByCategory(prompt.category)
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  const TOOL_LABEL: Record<string, string> = {
    'nano-banana': 'Nano Banana',
    'claude': 'Claude AI',
    'ltx': 'LTX Video',
  };
  const TOOL_COLOR: Record<string, string> = {
    'nano-banana': 'bg-violet-100 text-violet-700 border-violet-200',
    'claude': 'bg-amber-100 text-amber-700 border-amber-200',
    'ltx': 'bg-pink-100 text-pink-700 border-pink-200',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/category/${prompt.category}`} className="hover:text-indigo-600 transition-colors">
          {category?.name}
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-medium truncate">{prompt.title}</span>
      </nav>

      {/* Preview Image */}
      {prompt.image && (
        <div className="relative w-full rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-sm" style={{aspectRatio:'16/7'}}>
          <Image
            src={prompt.image}
            alt={`${prompt.title} preview`}
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>
      )}

      {/* Title */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {prompt.tool && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${TOOL_COLOR[prompt.tool] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
              {TOOL_LABEL[prompt.tool] || prompt.tool}
            </span>
          )}
          {prompt.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
              #{tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-3">{prompt.title}</h1>
        <p className="text-gray-500 leading-relaxed">{prompt.description}</p>
      </div>

      {/* Ad */}
      <AdUnit slot="2222222222" format="horizontal" className="w-full mb-8" />

      {/* The Prompt Block */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-900">The Prompt</h2>
          <CopyButton text={prompt.promptText} label="Copy Full Prompt" variant="large" />
        </div>
        <div className="bg-gray-900 rounded-2xl p-5 relative">
          <pre className="prompt-block text-sm text-gray-100 overflow-x-auto leading-7">
            {prompt.promptText}
          </pre>
          <div className="absolute top-4 right-4">
            <CopyButton text={prompt.promptText} variant="icon" className="bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white" />
          </div>
        </div>
      </div>

      {/* How to Use */}
      {prompt.usage && (
        <div className="mb-8 bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-indigo-600">▶</span> How to Use This Prompt
          </h2>
          <div className="text-gray-700 leading-relaxed text-sm whitespace-pre-wrap">{prompt.usage}</div>
        </div>
      )}

      {/* Variables */}
      {prompt.variables && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Variables to Replace</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
            {prompt.variables}
          </div>
        </div>
      )}

      {/* Tips */}
      {prompt.tips && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Pro Tips</h2>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
            {prompt.tips}
          </div>
        </div>
      )}

      {/* Ad mid-content */}
      <AdUnit slot="3333333333" format="rectangle" className="mx-auto mb-10" />

      {/* Related Prompts */}
      {related.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">More {category?.name} Prompts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map(p => <PromptCard key={p.slug} prompt={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
