import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import NotificationDropdown from "./NotificationDropdown";

const LoggedInHeader = () => {
  return (
    <header className="absolute left-0 right-0 top-0 flex shrink-0 items-center justify-between bg-light-almond px-3 py-6 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Invoice Chaser logo"
          width={100}
          height={100}
          className="h-auto w-8"
        />
        <span className="font-clash w-16 text-sm font-semibold uppercase leading-none text-calm-green">
          Invoice Chaser
        </span>
      </Link>

      <div className="flex items-center gap-1">
        <NotificationDropdown />

        <div className="h-10 w-10 shrink-0 rounded-full border-2 border-chill-black bg-tan flex items-center justify-center">
          <span className="text-sm uppercase font-clash font-semibold text-center">MT</span>
        </div>
      </div>
    </header>
  );
};

export default LoggedInHeader;