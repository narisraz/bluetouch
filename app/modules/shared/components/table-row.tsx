import type { Props } from "./props";

export function TableRow({ children, className }: Props) {
  return <tr className={`odd:bg-primary/5 ${className}`}>{children}</tr>;
}
