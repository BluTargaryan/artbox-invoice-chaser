import React from "react";
import InvoiceCard from "@/app/components/atoms/InvoiceCard";

export default function InvoicesPage() {
  return (
    <div className="flex w-full max-w-[350px] flex-col gap-8 px-4">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-calm-green">Invoices</h1>
        <button className="rounded-full border-2 border-chill-black bg-calm-green px-5 py-4.5 text-xs font-medium text-light-almond flex items-center justify-center">
          Add invoice
        </button>
      </div>

      {/* Tabs */}
      <div className="flex w-full items-center gap-5 rounded-3xl border-2 border-chill-black bg-calm-green p-4
      flex-wrap
      ">
        <button className="h-9 rounded-full bg-light-almond px-4 text-sm font-medium text-chill-black">
          Due
        </button>
        <button className="h-9 px-3 text-sm font-medium text-light-almond">
          Overdue
        </button>
        <button className="h-9 px-3 text-sm font-medium text-light-almond">
          Paid
        </button>
        <button className="h-9 px-3 text-sm font-medium text-light-almond">
          Archived
        </button>
      </div>


      <div className="flex flex-col gap-4">

      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      </div>
    </div>
  );
}
