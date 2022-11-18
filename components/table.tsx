import { Props } from "./props";

export default function Table({ children, className }: Props) {
  return (
    <div className={`bg-surface grow border rounded ${className}`}>
      <table className="w-full table-auto">{children}</table>
    </div>
  );
}
