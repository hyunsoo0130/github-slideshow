import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Prompt {
  slug: string;
  category: string;
  title: string;
  description: string;
  tool: string;
  tags: string[];
  promptText: string;
  usage: string;
  tips: string;
  variables: string;
  date: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'image-generation',
    name: 'Image Generation',
    description: 'Prompts for AI image generators like Nano Banana & LTX. Create stunning 3D renders, stylized art, and photorealistic visuals.',
    icon: '🎨',
    color: 'from-violet-500 to-purple-600',
  },
  {
    slug: 'docx-layout',
    name: 'Document Layout',
    description: 'Claude prompts to generate professional Word document layouts — reports, proposals, contracts, and more.',
    icon: '📄',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    slug: 'ppt-layout',
    name: 'Presentation',
    description: 'Claude prompts for PowerPoint slide structures — pitch decks, business presentations, and educational slides.',
    icon: '📊',
    color: 'from-orange-500 to-amber-600',
  },
  {
    slug: 'card-news',
    name: 'Card News',
    description: 'Claude prompts for card news layouts — 10-slide visual story series for social media and content marketing.',
    icon: '🃏',
    color: 'from-pink-500 to-rose-600',
  },
  {
    slug: 'excel-layout',
    name: 'Excel Layout',
    description: 'Claude prompts to generate spreadsheet structures — budgets, trackers, dashboards, and data tables.',
    icon: '📈',
    color: 'from-green-500 to-emerald-600',
  },
  {
    slug: 'ascii-art',
    name: 'ASCII Art',
    description: 'Copy-paste ASCII characters, symbols, emoticons, and art. Hearts, stars, text faces, borders, and more.',
    icon: '✦',
    color: 'from-indigo-500 to-blue-600',
  },
];

const PROMPTS_DIR = path.join(process.cwd(), 'content', 'prompts');

export function getAllPrompts(): Prompt[] {
  const categories = ['image-generation', 'docx-layout', 'ppt-layout', 'card-news', 'excel-layout'];
  const prompts: Prompt[] = [];

  for (const cat of categories) {
    const dir = path.join(PROMPTS_DIR, cat);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
      const { data, content } = matter(raw);
      prompts.push({
        slug: file.replace('.md', ''),
        category: cat,
        title: data.title || '',
        description: data.description || '',
        tool: data.tool || '',
        tags: data.tags || [],
        promptText: data.promptText || '',
        usage: data.usage || '',
        tips: data.tips || '',
        variables: data.variables || '',
        date: data.date || '',
      });
    }
  }

  return prompts.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getPromptsByCategory(categorySlug: string): Prompt[] {
  return getAllPrompts().filter(p => p.category === categorySlug);
}

export function getPromptBySlug(slug: string): Prompt | undefined {
  return getAllPrompts().find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
