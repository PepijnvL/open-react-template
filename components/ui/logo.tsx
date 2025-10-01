import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/kariz-logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="Kariz">
      <Image src={logo} alt="Kariz Logo" width={28} height={28} />
      <span className="font-nacelle text-xl font-bold text-white">Kariz</span>
    </Link>
  );
}
