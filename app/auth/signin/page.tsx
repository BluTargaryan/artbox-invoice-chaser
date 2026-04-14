"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import MiniLink from "@/app/components/atoms/MiniLink";
import Link from "next/link";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px]">Sign In</h1>

      <div className="w-[270px] flex flex-col justify-center gap-5 md:w-[322px]">
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

      <div className="flex flex-col items-center justify-center gap-5">
      <button className="w-[270px] bg-calm-green text-light-green md:w-[322px]" type="button">
        Sign In
      </button>
      <MiniLink href="/auth/signup" text="Don't have an account? Sign up" />
    </div>
    </>
  );
};

export default SignInPage