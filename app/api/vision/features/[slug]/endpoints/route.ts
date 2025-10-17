import { type NextRequest, NextResponse } from 'next/server'

import { getFeatureEndpoints } from '@/lib/vision/feature-ideas'

type Params = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET(_: NextRequest, { params: paramsPromise }: Params) {
  const params = await paramsPromise
  const endpoints = getFeatureEndpoints(params.slug)

  if (!endpoints.length) {
    return NextResponse.json(
      {
        error: 'Feature endpoints not found',
        slug: params.slug,
      },
      { status: 404 },
    )
  }

  return NextResponse.json({ slug: params.slug, endpoints })
}
