"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!password) return setError("Please enter your new password.");
    if (password !== confirmPassword) return setError("Passwords do not match.");

    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (updateError) return setError(updateError.message);

    router.push("/auth/signin");
  }

  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px] xl:w-[446px]">Reset Password</h1>

      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-5 xl:gap-8">
        <div className="flex w-[270px] flex-col justify-center gap-5 md:w-[322px] xl:w-[446px]">
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
          {loading ? "Resetting…" : "Reset Password"}
        </button>

        <Link
          href="/auth/signin"
          className="border-b border-chill-black py-1 text-chill-black transition-all duration-300 hover:border-tan hover:text-tan xl:text-2xl!"
        >
          Remember your password? Sign in
        </Link>
      </form>
    </>
  );
};

export default ResetPasswordPage;
