import { NextResponse } from 'next/server'


export async function GET() {
  const res = await fetch('https://63ec999932a08117239df65b.mockapi.io/api/v1/jobs', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  // NextResponse extends the Web Response API
  return NextResponse.json({ data })
}