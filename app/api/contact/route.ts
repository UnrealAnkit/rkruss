import { NextResponse } from 'next/server';

export async function POST(request: Request) {
 const formData = await request.json();
 const response = await fetch('https://formspree.io/f/xrbpadwq', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify(formData),
 });

 if (!response.ok) {
 return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
 }

 return NextResponse.json({ success: true });
}
