import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const term = searchParams.get('term');
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?per_page=1000`;
  if (term) url += `&term=${encodeURIComponent(term)}`;
  const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
  const data = await res.json();
  return NextResponse.json(data);
}
