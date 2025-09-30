"use client";

import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  type?: "text" | "email" | "password" | "number";
  name: string;
  value: string;
  placeholder?: string;
  unit?: string;
  required?: boolean;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type = "text",
  name,
  value,
  placeholder,
  unit,
  required,
  error,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* 라벨 */}
      {label && (
        <label htmlFor={name} className="text-body-2-regular text-gray-50">
          {label}
          {required && <span className="text-red-40 ml-0.5">*</span>}
        </label>
      )}

      <div className="relative">
        {/* 입력창 */}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full rounded-lg px-3 py-2 text-body-1-regular bg-white placeholder-gray-40 focus:outline-none focus:ring-2
            ${error ? "border border-red-40 focus:ring-red-30 bg-red-10" : "border border-gray-30 focus:ring-blue-20"}
            ${
              type === "number"
                ? "appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
                : ""
            }
          `}
        />

        {/* 단위 */}
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-50 text-body-2-regular">{unit}</span>
        )}
      </div>

      {/* 에러 메시지 */}
      {error && <p className="text-caption text-red-40">{error}</p>}
    </div>
  );
}
