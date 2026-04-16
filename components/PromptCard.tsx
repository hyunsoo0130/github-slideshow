import Link from 'next/link';
import type { Prompt } from '@/lib/data';

interface PromptCardProps {
  prompt: Prompt;
  categoryName?: string;
}

const TOOL_COLORS: Record<string, string> = {
  'nano-banana': 'bg-violet-100 text-violet-700',
  'claude': 'bg-amber-100 text-amber-700',
  'ltx': 'bg-pink-100 text-pink-700',
};

export default function PromptCard({ prompt, categoryName }: PromptCardProps) {
  return (
    <Link href={`/prompt/${prompt.slug}`} className="block group">
      <article className="bg-white border border-gray-100 rounded-2xl p-5 h-full flex flex-col gap-3 card-hover shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {prompt.tool && (
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${TOOL_COLORS[prompt.tool] || 'bg-gray-100 text-gray-600'}`}>
                {prompt.tool === 'nano-banana' ? 'Nano Banana' : prompt.tool === 'claude' ? 'Claude' : prompt.tool}
              </span>
            )}
            {categoryName && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
                {categoryName}
              </span>
            )}
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
          {prompt.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-2">
          {prompt.description}
        </p>

        {prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {prompt.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1 text-xs font-medium text-indigo-500 group-hover:text-indigo-700 pt-1">
          View & Copy Prompt
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
