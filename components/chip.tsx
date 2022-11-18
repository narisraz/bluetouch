import { Props } from "./props";

export default function Chip({ children, className }: Props) {
  return (
    <div
      className={`w-fit py-2 px-4 text-sm text-onPrimary font-semibold rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
