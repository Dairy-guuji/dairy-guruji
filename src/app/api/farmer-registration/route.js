import { NextResponse } from "next/server";
import { backendApiUrl } from "@/lib/api";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.farmer_name || !body.primary_mobile) {
      return NextResponse.json(
        { error: "Farmer name and primary mobile number are required." },
        { status: 400 },
      );
    }

    const response = await fetch(backendApiUrl("/api/forms/farmer-registration"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        { error: result?.error || "Failed to submit farmer registration." },
        { status: response.status || 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        result.message ||
        "Farmer registration submitted successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Failed to submit farmer registration.",
      },
      { status: 500 },
    );
  }
}
