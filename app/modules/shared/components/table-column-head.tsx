import type { Props } from "./props";

export function TableColumnHead({ children, className }: Props) {
  return (
    <th className={`p-4 text-left text-sm tracking-wide ${className}`}>
      {children}
    </th>
  );
}
