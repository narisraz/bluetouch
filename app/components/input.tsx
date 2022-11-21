import type { Props } from "~/components/props";

interface InputProps extends Props {
  type: string;
  placeholder: string;
  name: string;
}

export function Input({
  type,
  placeholder,
  name,
  className,
}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      className={`ml-2 rounded border py-2 px-3 focus:outline-primary/50 ${className}`}
      placeholder={placeholder}
    />
  );
}
