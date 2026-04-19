'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';

export interface SearchablePrompt {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
}

interface HangulSearchProps {
  prompts: SearchablePrompt[];
}

export default function HangulSearch({ prompts }: HangulSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchablePrompt[]>([]);
  const [open, setOpen] = useState(false);
  const isComposingRef = useRef(false);
  // iOS Safari/Chrome does not reliably fire compositionstart/compositionend on
  // <input> elements. We detect iOS once on mount and fall back to a debounced
  // onInput handler — the same strategy used by rhwp's input-handler-text.ts.
  const isIOSRef = useRef(false);
  const iosDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isIOSRef.current =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const doSearch = useCallback(
    (value: string) => {
      const q = value.trim().toLowerCase();
      if (!q) {
        setResults([]);
        setOpen(false);
        return;
      }
      const matched = prompts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
      setResults(matched.slice(0, 6));
      setOpen(true);
    },
    [prompts]
  );

  const handleCompositionStart = useCallback(() => {
    isComposingRef.current = true;
  }, []);

  // Composition ended: IME has committed the final characters. Search now.
  const handleCompositionEnd = useCallback(
    (e: React.CompositionEvent<HTMLInputElement>) => {
      isComposingRef.current = false;
      doSearch(e.currentTarget.value);
    },
    [doSearch]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      // On iOS the compositionstart event may never fire, so isComposingRef
      // stays false and we search on every change event — which is correct.
      // On desktop with active IME composition we defer until compositionEnd.
      if (!isComposingRef.current) {
        doSearch(value);
      }
    },
    [doSearch]
  );

  // iOS fallback: mirrors rhwp's _iosAnchor / debounce pattern.
  // We debounce at 100ms so rapid virtual-keyboard taps don't fire redundant
  // searches while the IME is still assembling jamo into syllables.
  const handleInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (!isIOSRef.current) return;
      const value = e.currentTarget.value;
      setQuery(value);
      if (iosDebounceRef.current) clearTimeout(iosDebounceRef.current);
      iosDebounceRef.current = setTimeout(() => doSearch(value), 100);
    },
    [doSearch]
  );

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setOpen(false);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          value={query}
          onChange={handleChange}
          onInput={handleInput}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onFocus={() => query && setOpen(true)}
          placeholder="프롬프트 검색… Search prompts"
          className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          enterKeyHint="search"
          inputMode="text"
          aria-label="Search prompts"
          aria-expanded={open}
          aria-haspopup="listbox"
          role="combobox"
        />

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="검색 지우기 / Clear search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {open && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg z-50 overflow-hidden"
          role="listbox"
        >
          {results.length > 0 ? (
            results.map((p) => (
              <Link
                key={p.slug}
                href={`/prompt/${p.slug}`}
                onClick={clearSearch}
                className="flex items-start gap-3 px-4 py-3 hover:bg-indigo-50 active:bg-indigo-100 transition-colors border-b border-gray-50 last:border-b-0"
                role="option"
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium text-gray-900 truncate">{p.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5 truncate">{p.description}</div>
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              검색 결과가 없습니다 · No results for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
