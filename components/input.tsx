import { Props } from "./props";

interface InputProps extends Props {
  type: string;
  placeholder: string;
  name: string;
}

export default function Input({
  type,
  placeholder,
  name,
  className,
}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      className={`py-2 px-3 ml-2 focus:outline-primary/50 border rounded ${className}`}
      placeholder={placeholder}
    />
  );
}
