"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import Link from "next/link";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <h1 className="w-[270px] text-center">Reset Password</h1>

      <div className="flex w-[270px] flex-col justify-center gap-5">
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
          label="Password"
          placeholder="Confirm your password"
          type="password"
          className="w-full"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
        />

      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <button className="w-[270px] bg-calm-green text-light-green" type="button">
          Reset Password
        </button>
        <Link
          href="/auth/signin"
          className="border-b border-chill-black py-1 text-chill-black transition-all duration-300 hover:border-tan hover:text-tan"
        >
          Remember your password? Sign in
        </Link>
      </div>
    </>
  );
};

export default ResetPasswordPage;
