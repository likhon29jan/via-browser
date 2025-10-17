import { type NextRequest, NextResponse } from 'next/server'

import { getRestEndpoint } from '@/lib/reference/api-reference'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET(
  _request: NextRequest,
  { params: paramsPromise }: { params: Promise<{ endpointId: string }> },
) {
  const params = await paramsPromise
  const endpoint = getRestEndpoint(params.endpointId)

  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 })
  }

  return NextResponse.json(endpoint)
}
