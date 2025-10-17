import { NextResponse } from "next/server";

import { featureIndex, listFeatureIdeas } from "@/lib/vision/feature-ideas";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  return NextResponse.json({
    summary: featureIndex,
    features: listFeatureIdeas()
  });
}
