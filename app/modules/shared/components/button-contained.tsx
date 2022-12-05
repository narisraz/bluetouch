import { RiLoader2Line } from "react-icons/ri";

import type { Props } from "./props";

interface ButtonContainedProps extends Props {
  type?: "button" | "submit" | "reset" | undefined,
  loading?: boolean,
  start?: React.ReactNode,
  end?: React.ReactNode,
}

export function ButtonContained({ children, className, type, loading, start, end }: ButtonContainedProps) {
  return (
    <button
      type={type}
      className={`flex cursor-pointer items-center rounded bg-primary py-2 px-4 text-onPrimary duration-200 hover:bg-primary/70 ${className} gap-1`}
    >
      {loading && <RiLoader2Line className="animate-spin" /> || start}
      {children}
      {end}
    </button>
  );
}
