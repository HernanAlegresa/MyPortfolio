import { NextResponse } from "next/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export async function GET() {
  const filePath = join(process.cwd(), "public", "cv", "HernanAlegresa_CV_2026.pdf");
  const fileBuffer = readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="HernanAlegresa_CV_2026.pdf"',
    },
  });
}
