"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import MiniLink from "@/app/components/atoms/MiniLink";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.trim()) return setError("Please enter your email.");
    if (!password) return setError("Please enter your password.");

    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (signInError) return setError(signInError.message);

    router.push("/acctSetup/brandDefinition");
  }

  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px] xl:w-[446px]">Sign In</h1>

      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-5 xl:gap-8">
        <div className="w-[270px] flex flex-col justify-center gap-5 md:w-[322px] xl:w-[446px]">
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
            autoComplete="current-password"
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
          {loading ? "Signing in…" : "Sign In"}
        </button>

        <MiniLink href="/auth/forgotpw" text="Forgot your password?" />
        <MiniLink href="/auth/signup" text="Don't have an account? Sign up" />
      </form>
    </>
  );
};

export default SignInPage