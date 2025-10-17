import { NextResponse } from 'next/server'

import { listWebSocketEndpoints } from '@/lib/reference/api-reference'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET() {
  return NextResponse.json({
    endpoints: listWebSocketEndpoints(),
  })
}
