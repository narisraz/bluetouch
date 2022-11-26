import { useState } from "react";
import { RiErrorWarningFill, RiErrorWarningLine } from "react-icons/ri";
import type { Props } from "~/components/props";

interface InputProps extends Props {
  type: string;
  placeholder: string;
  name: string;
  error?: string
}

export function Input({
  type,
  placeholder,
  name,
  className,
  error
}: InputProps) {
  return (
    <div className="ml-2">
      <input
        name={name}
        type={type}
        className={`rounded border py-2 px-3 focus:outline-primary/50 ${error && "border-error"} ${className}`}
        placeholder={placeholder}
      />
      {error && <div className="flex items-center gap-1 text-error text-sm">
        <RiErrorWarningFill /> {error}
      </div>
      }      
    </div>
  );
}
