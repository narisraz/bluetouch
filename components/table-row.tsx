import { Props } from "./props";

export default function TableRow({ children, className }: Props) {
  return <tr className={`odd:bg-primary/5 ${className}`}>{children}</tr>;
}
