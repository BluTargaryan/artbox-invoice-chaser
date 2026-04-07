"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import MiniLink from "@/app/components/atoms/MiniLink";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  return (
    <>
      <h1 className="w-[270px] text-center">Forgot Password</h1>

      <div className="w-[270px] flex flex-col justify-center gap-5">
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
       <p className="text-center">We will send the reset link to your email if you have an account on it.</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
      <button className="w-[270px] bg-calm-green text-light-green">
        Send Reset Link
      </button>
      <MiniLink href="/auth/signin" text="Remember your password? Sign in" />
    </div>
    </>
  );
};