import { Props } from "./props";

export default function TableColumnHead({ children, className }: Props) {
  return (
    <th className={`text-left p-4 text-sm tracking-wide ${className}`}>
      {children}
    </th>
  );
}
