"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="w-[270px] text-center">Sign In</h1>

      <div className="w-[270px] flex flex-col items-center justify-center gap-7">
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
    </>
  );
};

export default SignInPage