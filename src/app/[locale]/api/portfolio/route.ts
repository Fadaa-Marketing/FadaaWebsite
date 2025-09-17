// app/api/portfolio/route.ts
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");
    const viewFrom = searchParams.get("view_from") || "web";

    if (!categoryId) {
      return NextResponse.json(
        { message: "Missing categoryId" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/gallery?category_id=${categoryId}&view_from=${viewFrom}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers your API might need
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ results: data?.results || [] });
  } catch (error: any) {
    console.error("Portfolio API Error:", error);
    return NextResponse.json(
      { 
        message: "Server Error",
        error: process.env.NODE_ENV === "development" ? error.message : undefined
      },
      { status: 500 }
    );
  }
}