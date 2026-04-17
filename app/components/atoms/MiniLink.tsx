import Link from "next/link";

export default function MiniLink({ href, text }: { href: string, text: string }) {
  return (
  
      <Link
        href={href}
        className="border-b border-chill-black py-1 text-chill-black transition-all duration-300 hover:border-tan hover:text-tan xl:text-xl"
      >
        {text}
      </Link>

  );
}
