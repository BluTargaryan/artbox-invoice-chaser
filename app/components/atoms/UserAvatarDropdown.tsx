"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Profile", href: "/invoices/profile" },
  { label: "Settings", href: "/invoices/settings" },
  { label: "Sign out", href: "/sign-out" },
];

const UserAvatarDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setDropdownOpen((o) => !o)}
        className="h-10 w-10 shrink-0 rounded-full border-2 border-chill-black bg-tan flex items-center justify-center"
      >
        <span className="text-sm uppercase font-clash font-semibold text-center">MT</span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-[180px] border border-chill-black bg-[#FFFBF4] shadow-md">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="relative border-b border-chill-black last:border-b-0 hover:bg-[#F5F0E6]"
              >
                <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-calm-green"></div>
                <Link
                  href={item.href}
                  className="block pl-6 pr-4 py-4 text-sm font-medium text-chill-black"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAvatarDropdown;
