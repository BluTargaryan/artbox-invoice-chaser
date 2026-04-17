"use client";

import React, { useState } from "react";
import CustomInput from "@/app/components/atoms/CustomInput";
import Link from "next/link";

const TIMEFRAME_OPTIONS = [
  { value: "days_before", label: "days before" },
  { value: "days_after", label: "days after" },
  { value: "on_due_date", label: "on due date" },
];

const ACTION_OPTIONS = [
  { value: "send_email", label: "action: send email" },
  { value: "send_sms", label: "action: send sms" },
  { value: "call", label: "action: call" },
];

const DUMMY_RULES = [
  { label: "Rule 1", timing: "3 days before" },
  { label: "Rule 2", timing: "1 day after" },
];

const EditFollowupPage = () => {
  const [days, setDays] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [action, setAction] = useState("");

  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px]">Edit followup rules</h1>

      <div className="flex w-[270px] flex-col justify-center gap-10 py-4 md:w-[322px]">
        {/* Existing Rules */}

        <div className="flex flex-col gap-4">
        {DUMMY_RULES.map((rule) => (
          <div
            key={rule.label}
            className="relative flex h-12 w-full items-center border-2 border-chill-black bg-calm-green px-4"
          >
            <div className="absolute bottom-0 left-0 top-0 w-2 border-r-2 border-chill-black bg-tan"></div>
            <span className="ml-2 font-satoshi text-sm text-light-almond">{rule.label}</span>
            <span className="ml-auto font-satoshi text-xs text-light-almond">{rule.timing}</span>
          </div>
        ))}
        </div>

        {/* New Rule Inputs */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12">
              <CustomInput
                id="days"
                label=""
                type="number"
                placeholder="X"
                className="px-0! text-center"
                containerClassName=""
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <CustomInput
                id="timeframe"
                label=""
                type="select"
                placeholder="days before"
                className="w-full"
                containerClassName=""
                value={timeframe}
                onSelectChange={(v) => setTimeframe(v)}
                options={TIMEFRAME_OPTIONS}
              />
            </div>
          </div>

          <CustomInput
            id="action"
            label=""
            type="select"
            placeholder="action"
            className="w-full"
            containerClassName=""
            value={action}
            onSelectChange={(v) => setAction(v)}
            options={ACTION_OPTIONS}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mt-4">
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

export default EditFollowupPage;
