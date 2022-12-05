import { RiLoader2Line } from "react-icons/ri";

import type { Props } from "./props";

interface ButtonContainedProps extends Props {
  type?: "button" | "submit" | "reset" | undefined,
  loading?: boolean,
  start?: React.ReactNode,
  end?: React.ReactNode,
}

export function ButtonOutlined({ children, className, loading, start, end }: ButtonContainedProps) {
  return (
    <button
      className={`ml-2 flex cursor-pointer items-center rounded border border-primary/50 bg-surface py-2 px-3 text-primary duration-200 hover:bg-primary/5 ${className} gap-1`}
    >
      {loading && <RiLoader2Line className="animate-spin" /> || start}
      {children}
      {end}
    </button>
  );
}
