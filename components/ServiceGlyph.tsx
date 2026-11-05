import {
  Briefcase,
  Clock3,
  FileStack,
  GraduationCap,
  HeartHandshake,
  Scale,
  UserSearch,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/lib/content/services";

const icons: Record<ServiceIcon, LucideIcon> = {
  briefcase: Briefcase,
  search: UserSearch,
  wallet: Wallet,
  files: FileStack,
  graduation: GraduationCap,
  scale: Scale,
  clock: Clock3,
  heart: HeartHandshake,
};

export function ServiceGlyph({ name, className = "h-5 w-5" }: { name: ServiceIcon; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.5} aria-hidden />;
}
