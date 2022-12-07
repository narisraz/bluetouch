import type { Props } from "./props";

export function TableRowHead({ children, className }: Props) {
  return (
    <thead className={`border-b-2 ${className}`}>
      <tr>{children}</tr>
    </thead>
  );
}