export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const path = src.startsWith("/") ? src : `/${src}`;
  const prefixed = src.startsWith("http://") || src.startsWith("https://") ? src : `${base}${path}`;
  const separator = prefixed.includes("?") ? "&" : "?";
  return `${prefixed}${separator}w=${width}&q=${quality || 75}`;
}
