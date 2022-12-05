import type { Props } from "./props";

export function ButtonIcon({ children, className }: Props) {
  return (
    <button
      className={`ml-2 flex cursor-pointer items-center rounded border border-primary/50 bg-surface p-3 text-primary duration-200 hover:bg-primary/5 ${className}`}
    >
      {children}
    </button>
  );
}
