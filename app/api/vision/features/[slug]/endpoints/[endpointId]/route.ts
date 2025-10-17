import { NextResponse } from "next/server";

import { getFeatureEndpoint } from "@/lib/vision/feature-ideas";

type Params = {
  params: { slug: string; endpointId: string };
};

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET(_: Request, { params }: Params) {
  const endpoint = getFeatureEndpoint(params.slug, params.endpointId);

  if (!endpoint) {
    return NextResponse.json(
      {
        error: "Endpoint not found",
        slug: params.slug,
        endpointId: params.endpointId
      },
      { status: 404 }
    );
  }

  return NextResponse.json(endpoint);
}
