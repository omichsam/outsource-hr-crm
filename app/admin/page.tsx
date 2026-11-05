import { redirect } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";
import { readStore } from "@/lib/store";
import { AdminApp } from "@/components/AdminApp";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isLoggedIn())) redirect("/admin/login");
  const store = await readStore();
  return <AdminApp initial={store} />;
}
