import { RiLoader2Line } from "react-icons/ri";

import type { Props } from "./props";

interface ButtonIconProps extends Props {
  onclick?: () => void,
  loading?: boolean
}

export function ButtonIcon({ children, className, onclick, loading }: ButtonIconProps) {
  return (
    <button
      onClick={onclick}
      className={`ml-2 flex cursor-pointer items-center rounded border border-primary/50 bg-surface p-3 text-primary duration-200 hover:bg-primary/5 ${className}`}
    >
      {loading && <RiLoader2Line className="animate-spin" /> || children}
    </button>
  );
}
