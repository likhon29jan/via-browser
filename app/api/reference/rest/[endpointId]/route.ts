import { NextResponse } from "next/server";

import { getRestEndpoint } from "@/lib/reference/api-reference";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET(
  _request: Request,
  { params }: { params: { endpointId: string } }
) {
  const endpoint = getRestEndpoint(params.endpointId);

  if (!endpoint) {
    return NextResponse.json(
      { error: "Endpoint not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(endpoint);
}
