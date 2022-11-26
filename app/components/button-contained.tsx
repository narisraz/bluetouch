import type { Props } from "~/components/props";

interface ButtonContainedProps extends Props {
  type?: "button" | "submit" | "reset" | undefined
}

export function ButtonContained({ children, className, type }: ButtonContainedProps) {
  return (
    <button
      type={type}
      className={`flex cursor-pointer items-center rounded bg-primary py-2 px-4 text-onPrimary duration-200 hover:bg-primary/70 ${className}`}
    >
      {children}
    </button>
  );
}
