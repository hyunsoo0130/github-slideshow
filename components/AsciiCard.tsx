'use client';

import CopyButton from './CopyButton';

interface AsciiCardProps {
  char: string;
  name: string;
}

export default function AsciiCard({ char, name }: AsciiCardProps) {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl p-4 flex flex-col gap-2 card-hover shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <pre className="text-2xl leading-relaxed select-all font-mono text-gray-800 whitespace-pre-wrap break-all flex-1">
          {char}
        </pre>
        <CopyButton text={char} variant="icon" />
      </div>
      <p className="text-xs text-gray-400 truncate">{name}</p>
    </div>
  );
}
