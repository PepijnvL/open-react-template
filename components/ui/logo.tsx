import Link from "next/link";
import Image from "next/image";
import logoWhite from "@/public/images/kariz-logo-white.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="Kariz">
      <Image src={logoWhite} alt="Kariz Logo" width={28} height={28} className="shrink-0" />
      <span className="hidden md:inline font-nacelle text-xl font-bold text-white">Kariz</span>
    </Link>
  );
}
