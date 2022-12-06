import { RiErrorWarningFill } from "react-icons/ri";

import type { Props } from "./props";

interface InputProps extends Props {
  type: string;
  placeholder: string;
  name: string;
  error?: string;
  value?: string;
}

export function Input({
  type,
  placeholder,
  name,
  className,
  error,
  value
}: InputProps) {
  return (
    <div className="ml-2">
      <input
        name={name}
        type={type}
        defaultValue={value}
        className={`rounded border py-2 px-3 focus:outline-primary/50 ${error && "border-error"} ${className}`}
        placeholder={placeholder}
      />
      {error && <div className="flex items-center gap-1 text-sm text-error">
        <RiErrorWarningFill /> {error}
      </div>
      }      
    </div>
  );
}
