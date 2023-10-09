import { NextResponse } from "next/server";
import technologyData from "@/data/technology.json";

export async function GET() {
  return NextResponse.json({ technology: technologyData.technology });
}
