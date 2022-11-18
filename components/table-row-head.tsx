import { Props } from "./props";

export default function TableRowHead({ children, className }: Props) {
  return (
    <thead className={`border-b-2 ${className}`}>
      <tr>{children}</tr>
    </thead>
  );
}
