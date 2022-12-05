import type { Props } from "./props";

export function Table({ children, className }: Props) {
  return (
    <div className={`grow rounded border bg-surface ${className}`}>
      <table className="w-full table-auto">{children}</table>
    </div>
  );
}
