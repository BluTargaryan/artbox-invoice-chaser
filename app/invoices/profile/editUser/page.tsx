"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import Link from "next/link";

const EditUserPage = () => {
  const [fullName, setFullName] = useState("Client long nameeeeee");
  const [email, setEmail] = useState("longemailmail@xmalistinc.com");

  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px]">Edit profile</h1>

      <div className="flex w-[270px] flex-col justify-center gap-5 md:w-[322px]">
        <CustomInput
          id="fullName"
          label="Full name"
          placeholder="Enter your full name"
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
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <button className="w-[270px] bg-calm-green text-light-green md:w-[322px]" type="button">
          Save changes
        </button>
        <Link
          href="/invoices/profile"
          className="border-b border-chill-black py-1 text-chill-black transition-all duration-300 hover:border-tan hover:text-tan"
        >
          Cancel
        </Link>
      </div>
    </>
  );
};

export default EditUserPage;
