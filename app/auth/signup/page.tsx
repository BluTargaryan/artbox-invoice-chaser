"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import Link from "next/link";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <h1 className="w-[270px] text-center">Sign Up</h1>

      <div className="flex w-[270px] flex-col justify-center gap-5">
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

      <div className="flex flex-col items-center justify-center gap-5">
        <button className="w-[270px] bg-calm-green text-light-green" type="button">
          Sign Up
        </button>
        <Link
          href="/auth/signin"
          className="border-b border-chill-black py-1 text-chill-black transition-all duration-300 hover:border-tan hover:text-tan"
        >
          Already have an account? Sign in
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
