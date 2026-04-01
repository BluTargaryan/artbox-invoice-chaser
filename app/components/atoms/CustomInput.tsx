"use client";

import React, { useState } from "react";

const defaultInputClassName =
  "w-full h-12 rounded-full border-2 border-calm-green px-4 bg-light-green text-center text-chill-black";

/** Types that use the default “pill” field look; others rely on `className` or native styling. */
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
]);

function normalizeType(type: React.HTMLInputTypeAttribute | undefined) {
  return String(type ?? "text").toLowerCase();
}

export type CustomInputProps = {
  label: string;
  placeholder?: string;
  containerClassName?: string;
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
  ...rest
}: CustomInputProps) {
  const inputType = normalizeType(type);
  const isCheckLike = inputType === "checkbox" || inputType === "radio";
  const isFile = inputType === "file";

  const [uncontrolledValue, setUncontrolledValue] = useState(() => {
    if (isCheckLike) return "";
    return defaultValue != null ? String(defaultValue) : "";
  });
  const [uncontrolledChecked, setUncontrolledChecked] = useState(
    () => isCheckLike && Boolean(defaultChecked),
  );
  const [fileHasSelection, setFileHasSelection] = useState(false);

  const isControlledString = value !== undefined && !isCheckLike && !isFile;
  const isControlledChecked = checked !== undefined && isCheckLike;

  const currentString = isControlledString
    ? String(value ?? "")
    : uncontrolledValue;
  const currentChecked = isControlledChecked
    ? Boolean(checked)
    : uncontrolledChecked;

  const showLabel = isCheckLike
    ? currentChecked
    : isFile
      ? fileHasSelection
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

  const usesDefaultFieldStyle = USES_DEFAULT_FIELD_STYLES.has(inputType);
  const inputClassName = [usesDefaultFieldStyle ? defaultInputClassName : "", className]
    .filter(Boolean)
    .join(" ");

  const labelClassName = `block text-center font-medium font-clash transition-[max-width,max-height,opacity] duration-200 ease-out ${
    showLabel
      ? "max-h-8 max-w-[270px] opacity-100"
      : "max-h-0 max-w-0 opacity-0 overflow-hidden whitespace-nowrap"
  }`;

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
        <input
          {...rest}
          id={id}
          type={type}
          className={inputClassName || undefined}
          onChange={handleChange}
        />
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
