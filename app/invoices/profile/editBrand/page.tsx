"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import Link from "next/link";

const VOICE_OPTIONS = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "authoritative", label: "Authoritative" },
  { value: "casual", label: "Casual" },
  { value: "empathetic", label: "Empathetic" },
];

const EditBrandPage = () => {
  const [brandName, setBrandName] = useState("Client long nameeeeee");
  const [brandVoice, setBrandVoice] = useState("professional");

  return (
    <>
      <h1 className="w-[270px] text-center">Edit brand details</h1>

      <div className="flex w-[270px] flex-col justify-center gap-5">
        <CustomInput
          id="brandName"
          label="Brand name"
          type="text"
          className="w-full"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          autoComplete="off"
        />
        <CustomInput
          id="brandVoice"
          label="Brand voice"
          type="select"
          className="w-full"
          value={brandVoice}
          onSelectChange={(v) => setBrandVoice(v)}
          options={VOICE_OPTIONS}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <button className="w-[270px] bg-calm-green text-light-green" type="button">
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

export default EditBrandPage;
