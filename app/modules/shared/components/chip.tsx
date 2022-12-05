import type { Props } from "./props";

export function Chip({ children, className }: Props) {
  return (
    <div
      className={`w-fit rounded-2xl py-2 px-4 text-sm font-semibold text-onPrimary ${className}`}
    >
      {children}
    </div>
  );
}
