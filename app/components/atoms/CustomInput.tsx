"use client";

import React, { useEffect, useRef, useState } from "react";

const defaultInputClassName =
  "w-full h-12 rounded-full border-2 border-calm-green px-4 bg-light-green text-center text-chill-black xl:text-xl xl:placeholder:text-xl xl:h-16";

/** Types that use the default "pill" field look; others rely on `className` or native styling. */
const USES_DEFAULT_FIELD_STYLES = new Set([
  "text",
  "email",
  "password",
  "search",
  "tel",
  "url",
  "number",
  "date",
  "datetime-local",
  "month",
  "week",
  "time",
  "file",
]);

function normalizeType(type: React.HTMLInputTypeAttribute | undefined) {
  return String(type ?? "text").toLowerCase();
}

export type SelectOption = { value: string; label: string };

export type CustomInputProps = {
  label: string;
  placeholder?: string;
  containerClassName?: string;
  /** Pass `type="select"` together with `options` to render a dropdown. */
  options?: SelectOption[];
  /** Called with the chosen option value when the custom dropdown selection changes. */
  onSelectChange?: (value: string) => void;
} & React.ComponentPropsWithoutRef<"input">;

export default function CustomInput({
  label,
  placeholder = label,
  containerClassName = "flex flex-col items-center justify-center gap-2",
  className,
  id,
  type = "text",
  value,
  defaultValue,
  checked,
  defaultChecked,
  onChange,
  options,
  onSelectChange,
  ...rest
}: CustomInputProps) {
  const inputType = normalizeType(type);
  const isCheckLike = inputType === "checkbox" || inputType === "radio";
  const isFile = inputType === "file";
  const isSelect = inputType === "select";

  const [uncontrolledValue, setUncontrolledValue] = useState(() => {
    if (isCheckLike) return "";
    return defaultValue != null ? String(defaultValue) : "";
  });
  const [uncontrolledChecked, setUncontrolledChecked] = useState(
    () => isCheckLike && Boolean(defaultChecked),
  );
  const [fileHasSelection, setFileHasSelection] = useState(false);

  const isControlledString = value !== undefined && !isCheckLike && !isFile && !isSelect;
  const isControlledChecked = checked !== undefined && isCheckLike;
  const isControlledSelect = value !== undefined && isSelect;

  const currentString = isControlledString
    ? String(value ?? "")
    : uncontrolledValue;
  const currentChecked = isControlledChecked
    ? Boolean(checked)
    : uncontrolledChecked;
  const currentSelectValue = isControlledSelect ? String(value ?? "") : uncontrolledValue;

  const showLabel = isCheckLike
    ? currentChecked
    : isFile
      ? fileHasSelection
      : isSelect
        ? currentSelectValue.length > 0
        : currentString.length > 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlledString && !isCheckLike && !isFile) {
      setUncontrolledValue(e.target.value);
    }
    if (!isControlledChecked && isCheckLike) {
      setUncontrolledChecked(e.target.checked);
    }
    if (isFile) {
      setFileHasSelection((e.target.files?.length ?? 0) > 0);
    }
    onChange?.(e);
  }

  function applySelectValue(val: string) {
    if (!isControlledSelect) setUncontrolledValue(val);
    onSelectChange?.(val);
  }

  const usesDefaultFieldStyle = USES_DEFAULT_FIELD_STYLES.has(inputType);
  const inputClassName = [usesDefaultFieldStyle ? defaultInputClassName : "", className]
    .filter(Boolean)
    .join(" ");

  const selectTriggerClassName = [defaultInputClassName, className]
    .filter(Boolean)
    .join(" ");

  const labelClassName = `block text-center font-medium font-clash transition-[max-width,max-height,opacity] duration-200 ease-out ${
    showLabel
      ? "max-h-8 max-w-[270px] opacity-100"
      : "max-h-0 max-w-0 opacity-0 overflow-hidden whitespace-nowrap"
  }`;

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

  if (isSelect) {
    const selectedLabel = options?.find((o) => o.value === currentSelectValue)?.label;

    return (
      <div className={containerClassName}>
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        <div ref={dropdownRef} className="relative w-full">
          <button
            id={id}
            type="button"
            className={`${selectTriggerClassName} flex items-center justify-between shadow-none! transform-none!`}
            onClick={() => setDropdownOpen((o) => !o)}
          >
            <span className="flex-1 text-center">
              {selectedLabel ?? (placeholder ?? label)}
            </span>
            <span className="ml-2 text-xs">{dropdownOpen ? "▲" : "▼"}</span>
          </button>

          {dropdownOpen && (
            <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-2xl border-2 border-calm-green bg-light-green shadow-md">
              {options?.map((opt) => (
                <li
                  key={opt.value}
                  className={`cursor-pointer px-6 py-4.5 text-center transition-colors hover:bg-calm-green hover:text-light-green ${
                    opt.value === currentSelectValue ? "bg-calm-green text-light-green" : ""
                  }`}
                  onClick={() => {
                    applySelectValue(opt.value);
                    setDropdownOpen(false);
                  }}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  if (isCheckLike) {
    return (
      <div className={containerClassName}>
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        <input
          {...rest}
          id={id}
          type={type}
          value={value}
          className={inputClassName || undefined}
          checked={isControlledChecked ? Boolean(checked) : uncontrolledChecked}
          onChange={handleChange}
        />
      </div>
    );
  }

  if (isFile) {
    return (
      <div className={containerClassName}>
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        <div className="relative w-full">
          <input
            {...rest}
            id={id}
            type="file"
            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            onChange={handleChange}
          />
          <div className={`${selectTriggerClassName} flex items-center justify-center shadow-none! transform-none!`}>
            <span className="flex-1 text-center">
              {fileHasSelection ? "File selected" : (placeholder ?? label)}
            </span>
            
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClassName || undefined}
        value={isControlledString ? value : uncontrolledValue}
        onChange={handleChange}
      />
    </div>
  );
}
