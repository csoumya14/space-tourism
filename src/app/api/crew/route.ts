import { NextResponse } from "next/server";
import crew from "@/data/crew.json";

export async function GET() {
  return NextResponse.json({ crew: crew.crew });
}
