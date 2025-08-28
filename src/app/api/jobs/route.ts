import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");

    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`;

    // Append category_id only if categoryId exists and is not 0
    if (categoryId && categoryId !== "0") {
      apiUrl += `?category_id=${categoryId}`;
    }

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json({ results: data?.data || [] });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Server Error", error: error?.message || error },
      { status: 500 }
    );
  }
}
