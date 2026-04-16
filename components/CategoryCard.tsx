import Link from 'next/link';
import type { Category } from '@/lib/data';

interface CategoryCardProps {
  category: Category;
  count?: number;
}

export default function CategoryCard({ category, count }: CategoryCardProps) {
  const href = category.slug === 'ascii-art' ? '/ascii' : `/category/${category.slug}`;

  return (
    <Link href={href} className="block group">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full flex flex-col gap-4 card-hover shadow-sm">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl shadow-sm`}>
          {category.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-base mb-1 group-hover:text-indigo-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          {count !== undefined && (
            <span className="text-xs text-gray-400">{count} prompts</span>
          )}
          <span className="text-xs font-medium text-indigo-500 group-hover:text-indigo-700 flex items-center gap-1 ml-auto">
            Browse
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
