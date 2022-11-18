import { Props } from "./props";

export default function TableCell({ children, className }: Props) {
  return <td className={`text-sm px-4 py-2 ${className}`}>{children}</td>;
}
