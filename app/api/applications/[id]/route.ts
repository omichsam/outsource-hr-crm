import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { isLoggedIn } from "@/lib/auth";
import { readStore } from "@/lib/store";

type Params = { id: string };

export async function GET(_request: Request, context: { params: Promise<Params> }) {
  if (!(await isLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await context.params;
  const store = await readStore();
  const application = (store.applications || []).find((item) => item.id === id);
  if (!application) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const filePath = path.join(process.cwd(), "data", "private-uploads", application.storedFile);
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(path.resolve(path.join(process.cwd(), "data", "private-uploads")))) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  try {
    const bytes = await fs.readFile(resolved);
    const pdf = application.storedFile.toLowerCase().endsWith(".pdf");
    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type": pdf
          ? "application/pdf"
          : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${application.fileName.replace(/"/g, "")}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "File missing" }, { status: 404 });
  }
}
