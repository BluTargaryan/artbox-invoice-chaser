import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import NotificationDropdown from "./NotificationDropdown";
import UserAvatarDropdown from "./UserAvatarDropdown";

const LoggedInHeader = () => {
  return (
    <header className="absolute left-0 right-0 top-0 flex shrink-0 items-center justify-between bg-light-almond px-3 py-6 z-50 md:px-10">
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

      <div className="flex items-center gap-1 md:gap-5">
        <NotificationDropdown />

        <UserAvatarDropdown />
      </div>
    </header>
  );
};

export default LoggedInHeader;