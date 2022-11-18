import { Props } from "./props";

export default function ButtonIcon({ children, className }: Props) {
  return (
    <button
      className={`flex ml-2 p-3 hover:bg-primary/5 items-center text-primary bg-surface border-primary/50 border rounded cursor-pointer duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
