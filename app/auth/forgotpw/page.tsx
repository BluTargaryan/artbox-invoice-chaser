"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import MiniLink from "@/app/components/atoms/MiniLink";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.trim()) return setError("Please enter your email.");

    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const origin = window.location.origin;

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/callback?next=/auth/resetpw`,
    });

    setLoading(false);
    if (resetError) return setError(resetError.message);

    router.push("/auth/check-email");
  }

  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px] xl:w-[446px]">Forgot Password</h1>

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
          <p className="text-center">
            We will send the reset link to your email if you have an account on it.
          </p>
        </div>

        {error && (
          <p className="w-[270px] text-center text-red-600 md:w-[322px] xl:w-[446px]">{error}</p>
        )}

        <button
          className="w-[270px] bg-calm-green text-light-green disabled:opacity-60 md:w-[322px] xl:w-[446px]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending…" : "Send Reset Link"}
        </button>

        <MiniLink href="/auth/signin" text="Remember your password? Sign in" />
      </form>
    </>
  );
};