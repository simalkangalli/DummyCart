import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API Çalışıyor!" });
}
export async function POST(request: Request) {
    const body = await request.json();
    return NextResponse.json({ data: body });
  }
  