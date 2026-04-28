import React from "react";
import Link from "next/link";

const user = {
  fullName: "Client long nameeeeee",
  email: "longemailmail@xmalistinc.com",
};

const brand = {
  name: "Client long nameeeeee",
  voice: "Professional",
};

const followupRules = [
  { timing: "Before X days", action: "Chaser action" },
  { timing: "After X days", action: "Chaser action" },
];

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="">{label}</label>
      <p className="wrap-break-word font-bold text-calm-green">{value}</p>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-12 px-4 md:max-w-5xl md:gap-16 md:px-8">
      <h1 className="">Profile</h1>

      <div className="flex flex-col gap-15 md:grid md:grid-cols-3 md:gap-12">
{/* User details */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3>User details</h3>
          <ProfileField label="Full name" value={user.fullName} />
          <ProfileField label="Email" value={user.email} />
        </div>
        <Link href="/invoices/profile/editUser">
          <button
            type="button"
            className="h-14 w-full rounded-full border-2 border-chill-black bg-calm-green px-6 font-clash text-sm text-light-green transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)] md:w-auto"
          >
            Edit user details
          </button>
        </Link>
      </section>

      {/* Brand details */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3>Brand details</h3>
          <ProfileField label="Brand name" value={brand.name} />
          <ProfileField label="Brand voice" value={brand.voice} />
        </div>
        <Link href="/invoices/profile/editBrand">
          <button
            type="button"
            className="h-14 w-full rounded-full border-2 border-chill-black bg-calm-green px-6 font-clash text-sm text-light-green transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)] md:w-auto"
          >
            Edit brand details
          </button>
        </Link>
      </section>

      {/* Followup rules */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3>Followup rules</h3>
          {followupRules.map((rule) => (
            <ProfileField key={rule.timing} label={rule.timing} value={rule.action} />
          ))}
        </div>
        <Link href="/invoices/profile/editFollowup">
          <button
            type="button"
            className="h-14 w-full rounded-full border-2 border-chill-black bg-calm-green px-6 font-clash text-sm text-light-green transition-transform hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-chill-black)] md:w-auto"
          >
            Edit followup rules
          </button>
        </Link>
      </section>

      </div>
    </div>
  );
}
