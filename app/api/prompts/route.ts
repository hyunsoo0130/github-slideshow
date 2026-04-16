import { NextRequest, NextResponse } from 'next/server';
import { getAllPrompts, getPromptsByCategory } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  const prompts = category ? getPromptsByCategory(category) : getAllPrompts();
  return NextResponse.json(prompts);
}
