export const staticHost = process.env.NEXT_PUBLIC_STATIC_HOST === "true";

export const staticFormMessage =
  "This GitHub Pages copy can show the website, but it cannot store an enquiry or a CV. Those are saved only when the site is running on its application server.";

export function apiUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
