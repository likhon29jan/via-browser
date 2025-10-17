import { type NextRequest, NextResponse } from 'next/server'

import { getFeatureIdea } from '@/lib/vision/feature-ideas'

type Params = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET(_: NextRequest, { params: paramsPromise }: Params) {
  const params = await paramsPromise
  const feature = getFeatureIdea(params.slug)

  if (!feature) {
    return NextResponse.json(
      {
        error: 'Feature not found',
        slug: params.slug,
      },
      { status: 404 },
    )
  }

  return NextResponse.json(feature)
}
