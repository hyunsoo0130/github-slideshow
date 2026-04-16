import { NextRequest, NextResponse } from 'next/server';
import { getPromptBySlug } from '@/lib/data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(prompt);
}
