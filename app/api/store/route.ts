import { NextResponse } from "next/server";
import { isLoggedIn } from "@/lib/auth";
import { readStore, writeStore } from "@/lib/store";
import type { Store } from "@/lib/types";

export async function GET() {
  if (!(await isLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await readStore());
}

export async function PUT(request: Request) {
  if (!(await isLoggedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as Store;
  if (!body?.company?.displayName) {
    return NextResponse.json({ error: "Invalid store" }, { status: 400 });
  }
  const saved = await writeStore(body);
  return NextResponse.json(saved);
}
