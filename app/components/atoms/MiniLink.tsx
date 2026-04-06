import Link from "next/link";

export default function MiniLink() {
  return (
  
      <Link
        href="/auth/signup"
        className="border-b border-chill-black py-1 text-chill-black transition-all duration-300 hover:border-tan hover:text-tan"
      >
        Don&apos;t have an account? Sign up
      </Link>

  );
}
