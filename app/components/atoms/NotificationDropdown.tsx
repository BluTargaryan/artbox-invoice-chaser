"use client";

import React, { useState, useRef, useEffect } from "react";

const NotificationDropdown = () => {
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

  // Dummy notifications for design testing
  const notifications = [
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex shadow-none! transform-none! h-10 items-center gap-2 rounded-full border-2 border-chill-black bg-calm-green px-4 text-xs text-light-almond 
        md:text-base xl:px-5
        "
        onClick={() => setDropdownOpen((o) => !o)}
      >
        <span>Notifications</span>
        <span className="text-[10px]">▼</span>
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-[240px] border border-chill-black bg-light-almond shadow-md
        max-h-90vh overflow-y-scroll
        md:w-[350px]
        xl:w-[800px]
        ">
          <ul className="flex flex-col">
            {notifications.map((text, idx) => (
              <li
                key={idx}
                className="relative border-b border-chill-black px-4 py-4 text-sm font-medium text-chill-black last:border-b-0 hover:bg-[#F5F0E6]"
              >
                <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-tan"></div>
                <p className="pl-3 leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;