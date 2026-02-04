import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  // This endpoint is temporarily disabled.
  // Future implementation should use Resend or another HTTP-based email service.
  
  return NextResponse.json(
    { 
      success: false, 
      message: 'Email sending is temporarily disabled. Please contact us directly at yuri.metodiev@outlook.com' 
    },
    { status: 503 }
  );
}