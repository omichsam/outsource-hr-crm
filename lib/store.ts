import { promises as fs } from "fs";
import path from "path";
import type { Store } from "./types";

const filePath = path.join(process.cwd(), "data", "store.json");

export async function readStore(): Promise<Store> {
  const raw = await fs.readFile(filePath, "utf8");
  const store = JSON.parse(raw) as Store;
  store.applications = store.applications || [];
  return store;
}

export async function writeStore(store: Store): Promise<Store> {
  const next: Store = { ...store, updatedAt: new Date().toISOString() };
  const json = JSON.stringify(next, null, 2);
  await fs.writeFile(filePath, json, "utf8");
  return next;
}

export function publicJobs(store: Store) {
  return store.jobs
    .filter((job) => job.status === "published")
    .sort((a, b) => b.postedAt.localeCompare(a.postedAt));
}

export function publicTeam(store: Store) {
  return store.team.filter((member) => member.published);
}

export function publicNews(store: Store) {
  return store.news
    .filter((item) => item.published)
    .sort((a, b) => b.date.localeCompare(a.date));
}
