import type { Props } from "~/components/props";

export function ButtonContained({ children, className }: Props) {
  return (
    <button
      className={`flex cursor-pointer items-center rounded bg-primary py-2 px-4 text-onPrimary duration-200 hover:bg-primary/70 ${className}`}
    >
      {children}
    </button>
  );
}
