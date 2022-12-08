import { RiLoader2Line } from "react-icons/ri";

import type { Props } from "./props";

interface ButtonContainedProps extends Props {
  type?: "button" | "submit" | "reset" | undefined,
  loading?: boolean,
  start?: React.ReactNode,
  end?: React.ReactNode,
  onclick?: () => void
}

export function ButtonContained({ children, className, type, loading, start, end, onclick }: ButtonContainedProps) {
  return (
    <button
      disabled={loading}
      onClick={onclick}
      type={type}
      className={`flex cursor-pointer items-center rounded bg-primary py-2 px-4 text-onPrimary duration-200 hover:bg-primary/70 disabled:cursor-default disabled:bg-gray-500 ${className} gap-1`}
    >
      {loading && <RiLoader2Line className="mr-2 animate-spin" /> || start}
      {children}
      {end}
    </button>
  );
}
