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
      <p className="font-bold text-calm-green">{value}</p>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="flex w-[270px] flex-col gap-20">
      <h1 className="text-3xl">Profile</h1>

      <div className="flex flex-col gap-15">
{/* User details */}
<section className="flex flex-col gap-4">
        <h3>User details</h3>
        <ProfileField label="Full name" value={user.fullName} />
        <ProfileField label="Email" value={user.email} />
        <Link href="/invoices/profile/editUser">
          <button
            type="button"
            className="px-12 h-14 bg-calm-green text-light-green font-clash text-sm"
          >
            Edit user details
          </button>
        </Link>
      </section>

      {/* Brand details */}
      <section className="flex flex-col gap-4">
        <h3>Brand details</h3>
        <ProfileField label="Brand name" value={brand.name} />
        <ProfileField label="Brand voice" value={brand.voice} />
        <Link href="/invoices/profile/editBrand">
          <button
            type="button"
            className="px-12 h-14 bg-calm-green text-light-green font-clash text-sm"
          >
            Edit brand details
          </button>
        </Link>
      </section>

      {/* Followup rules */}
      <section className="flex flex-col gap-4">
        <h3>Followup rules</h3>
        {followupRules.map((rule) => (
          <ProfileField key={rule.timing} label={rule.timing} value={rule.action} />
        ))}
        <Link href="/invoices/profile/editFollowup">
          <button
            type="button"
            className="px-12 h-14 bg-calm-green text-light-green font-clash text-sm"
          >
            Edit followup rules
          </button>
        </Link>
      </section>

      </div>
    </div>
  );
}
