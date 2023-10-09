import { NextResponse } from "next/server";
import destination from "@/data/destination.json";

export async function GET() {
  return NextResponse.json({ destination: destination.destinations });
}
