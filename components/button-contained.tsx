import { Props } from "./props";

export default function ButtonContained({ children, className }: Props) {
  return (
    <button
      className={`flex items-center bg-primary text-onPrimary py-2 px-4 rounded cursor-pointer hover:bg-primary/70 duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
