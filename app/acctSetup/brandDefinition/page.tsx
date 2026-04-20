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

const BrandDefinitionPage = () => {
  const [brandName, setBrandName] = useState("");
  const [brandVoice, setBrandVoice] = useState("");

  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px] xl:w-[446px]">Define your brand</h1>

      <div className="flex w-[270px] flex-col justify-center gap-5 md:w-[322px] xl:w-[446px]">
        <CustomInput
          id="brandName"
          label="Brand name"
          type="text"
          className="w-full"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          autoComplete="brandName"
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

      <div className="flex flex-col items-center justify-center gap-5 xl:gap-8">
        <button className="w-[270px] bg-calm-green text-light-green md:w-[322px] xl:w-[446px]" type="button">
          Define brand voice
        </button>
        <Link
          href="/"
          className="border-b border-chill-black py-1 text-chill-black transition-all duration-300 hover:border-tan hover:text-tan xl:text-2xl!"
        >
          Skip! I'll do it later
        </Link>
      </div>
    </>
  );
};

export default BrandDefinitionPage;
