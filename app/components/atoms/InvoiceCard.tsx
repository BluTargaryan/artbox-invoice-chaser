import React from "react";

export type InvoiceCardProps = {
  tags?: string[];
  amountDisplay?: string;
  clientName?: string;
  dateDisplay?: string;
};

export default function InvoiceCard({
  tags = ["Status", "Notification"],
  amountDisplay = "Bill: $ 000000",
  clientName = "Client name",
  dateDisplay = "mm/dd/yy",
}: InvoiceCardProps) {
  return (
    <div className="base-shadow flex w-full flex-col rounded-xl border-2 border-chill-black bg-calm-green px-4.5 py-8">
      <div className="mb-4 flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="flex items-center justify-center rounded-bl-2xl rounded-tr-2xl border-2 border-chill-black bg-light-green px-4 py-1 text-xs font-medium text-chill-black
            xl:text-base
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-4 flex flex-col rounded-xl border-2 border-chill-black bg-tan p-4 base-shadow">
        <div className="outline-black mb-2 font-clash text-3xl font-semibold tracking-wider text-light-almond xl:text-4xl xl:mb-3">
          {amountDisplay}
        </div>
        <p className="font-medium text-chill-black">
          Name: {clientName}
        </p>
        <p className="font-medium text-chill-black">
          Date: {dateDisplay}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-full border-2 border-chill-black bg-light-green px-6 py-2 text-xs font-medium text-chill-black transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)]"
          >
            Archive
          </button>
          <button
            type="button"
            className="rounded-full border-2 border-chill-black bg-light-green px-6 py-2 text-xs font-medium text-chill-black transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)]"
          >
            Edit
          </button>
        </div>
        <div>
          <button
            type="button"
            className="rounded-full border-2 border-chill-black bg-tan px-6 py-2 text-xs font-medium text-chill-black transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)]"
          >
            Send reminder
          </button>
        </div>
      </div>
    </div>
  );
}
