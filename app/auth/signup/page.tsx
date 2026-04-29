"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email.trim()) return setError("Please enter your email.");
    if (!password) return setError("Please enter your password.");
    if (password !== confirmPassword) return setError("Passwords do not match.");

    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const origin = window.location.origin;

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    setLoading(false);
    if (signUpError) return setError(signUpError.message);

    router.push("/auth/check-email");
  }

  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px] xl:w-[446px]">Sign Up</h1>

      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-5 xl:gap-8">
        <div className="flex w-[270px] flex-col justify-center gap-5 md:w-[322px] xl:w-[446px]">
          <CustomInput
            id="fullName"
            label="Full name"
            placeholder="Enter full name e.g. John Doe"
            type="text"
            className="w-full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
          <CustomInput
            id="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <CustomInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <CustomInput
            id="confirmPassword"
            label="Confirm password"
            placeholder="Confirm your password"
            type="password"
            className="w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        {error && (
          <p className="w-[270px] text-center text-red-600 md:w-[322px] xl:w-[446px]">{error}</p>
        )}

        <button
          className="w-[270px] bg-calm-green text-light-green disabled:opacity-60 md:w-[322px] xl:w-[446px]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing up…" : "Sign Up"}
        </button>

        <Link
          href="/auth/signin"
          className="border-b border-chill-black py-1 text-chill-black transition-all duration-300 hover:border-tan hover:text-tan xl:text-2xl!"
        >
          Already have an account? Sign in
        </Link>
      </form>
    </>
  );
};

export default SignUpPage;
