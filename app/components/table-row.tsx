import type { Props } from "~/components/props";

export function TableRow({ children, className }: Props) {
  return <tr className={`odd:bg-primary/5 ${className}`}>{children}</tr>;
}
