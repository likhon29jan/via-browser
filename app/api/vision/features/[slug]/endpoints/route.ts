import { NextResponse } from "next/server";

import { getFeatureEndpoints } from "@/lib/vision/feature-ideas";

type Params = {
  params: { slug: string };
};

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET(_: Request, { params }: Params) {
  const endpoints = getFeatureEndpoints(params.slug);

  if (!endpoints.length) {
    return NextResponse.json(
      {
        error: "Feature endpoints not found",
        slug: params.slug
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ slug: params.slug, endpoints });
}
