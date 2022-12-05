import type { Props } from "./props";

export function TableCell({ children, className }: Props) {
  return <td className={`px-4 py-2 text-sm ${className}`}>{children}</td>;
}
