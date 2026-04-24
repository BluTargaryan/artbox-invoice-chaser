"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";

export default function AddInvoicePage() {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [dateDue, setDateDue] = useState("");
  const [document, setDocument] = useState("");
  const [paymentLink, setPaymentLink] = useState("");
  const [note, setNote] = useState("");
  const [automate, setAutomate] = useState(false);

  return (
    <div className="flex w-[270px] flex-col items-center gap-6 px-4 py-10 md:w-[322px] xl:w-[446px]">
      <h1 className="mb-17 text-center">Add invoice</h1>

      <div className="flex w-full flex-col gap-4 md:w-[322px] xl:w-[446px]">
        <CustomInput
          id="clientName"
          label="Client name"
          placeholder="Client name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        
        <CustomInput
          id="email"
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <CustomInput
          id="dateDue"
          label="Date due"
          type="date"
          placeholder="Date due"
          value={dateDue}
          onChange={(e) => setDateDue(e.target.value)}
        />
        
        <CustomInput
          id="document"
          label="Invoice document (optional)"
          type="file"
          placeholder="Invoice document (optional)"
          onChange={(e) => setDocument(e.target.value)}
        />
        
        <CustomInput
          id="paymentLink"
          label="Payment link (optional)"
          placeholder="Payment link (optional)"
          value={paymentLink}
          onChange={(e) => setPaymentLink(e.target.value)}
        />
      </div>

      {/* Notes Section */}
      <div className="flex w-full flex-col items-center rounded-3xl border-2 border-chill-black bg-light-green p-4 md:w-[322px] xl:w-[446px] xl:p-6">
        <h3 className="mb-3 font-semibold text-chill-black">Notes</h3>
        
        <textarea
          className="mb-4 h-24 w-full resize-none rounded-xl border-2 border-chill-black bg-light-green p-3 font-satoshi text-sm text-chill-black placeholder:text-chill-black focus:outline-none
          xl:placeholder:text-2xl xl:text-2xl xl:h-50
          "
          placeholder="Add note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        
        <button
          type="button"
          className="mb-5 h-10 w-full rounded-full border-2 border-chill-black bg-calm-green px-4 text-xs font-medium text-light-almond transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)]
          xl:w-[322px] xl:h-12
          "
        >
          Submit note
        </button>

        {/* Existing Note */}
        <div className="relative w-full border-2 border-chill-black bg-calm-green px-4 py-4">
          <div className="absolute bottom-0 left-0 top-0 w-2 border-r-2 border-chill-black bg-tan"></div>
          <p className="ml-2 font-satoshi text-xs leading-relaxed text-light-almond">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Automate checkbox */}
      <div
        onClick={() => setAutomate(!automate)}
        className="flex h-12 w-full items-center rounded-full border-2 border-chill-black bg-light-green px-4 md:w-[322px] xl:w-[446px] xl:h-16"
      >
        <div className=" cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 mr-3 flex h-4 w-4 items-center justify-center rounded-full border border-chill-black xl:h-6 xl:w-6">
          {automate && <div className="h-2 w-2 rounded-full bg-chill-black xl:h-3 xl:w-3"></div>}
        </div>
        <span className="font-satoshi text-sm font-medium text-chill-black xl:text-base">Automate invoice chasing</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-2 flex w-full flex-col gap-4 md:w-[322px] xl:w-[446px]">
        <button
          type="button"
          className="h-12 w-full! rounded-full border-2 border-chill-black bg-calm-green font-clash text-sm font-medium text-light-green transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)] md:w-52"
        >
          Submit
        </button>
        <button
          type="button"
          className="h-12 w-full! rounded-full border-2 border-chill-black bg-[#FFFBF4] font-clash text-sm font-medium text-chill-black transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)] md:w-52"
        >
          No, go back
        </button>
      </div>
    </div>
  );
}
