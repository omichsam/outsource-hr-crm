import { cookies } from "next/headers";
import { createHmac } from "crypto";

const COOKIE = "nb_session";

function secret() {
  return process.env.SESSION_SECRET || "northbridge-dev-secret";
}

export function adminPassword() {
  return process.env.ADMIN_PASSWORD || "northbridge";
}

export function signSession() {
  const exp = Date.now() + 1000 * 60 * 60 * 12;
  const payload = `ok.${exp}`;
  const sig = createHmac("sha256", secret()).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export function isValidSession(token: string | undefined) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [ok, exp, sig] = parts;
  const payload = `${ok}.${exp}`;
  const expected = createHmac("sha256", secret()).update(payload).digest("hex");
  if (expected !== sig || ok !== "ok") return false;
  return Number(exp) > Date.now();
}

export async function isLoggedIn() {
  const jar = await cookies();
  return isValidSession(jar.get(COOKIE)?.value);
}

export { COOKIE };
