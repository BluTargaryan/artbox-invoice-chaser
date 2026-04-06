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
      <h1 className="w-[270px] text-center">Sign In</h1>

      <div className="w-[270px] flex flex-col justify-center gap-7">
        <CustomInput
          id="email"
          label="Email"
          type="email"
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <CustomInput
          id="password"
          label="Password"
          type="password"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-7">
      <button className="w-[270px] bg-calm-green text-light-green" type="button">
        Sign In
      </button>
      <MiniLink />
    </div>
    </>
  );
};

export default SignInPage