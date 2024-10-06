import Link from "next/link";
import { Button } from "../ui/button";

type TBackButton = {
  href: string;
  label: string;
};

export default function BackButton({ href, label }: TBackButton) {
  return (
    <Button variant="link" className="w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
