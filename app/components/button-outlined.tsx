import type { Props } from "~/components/props";

export function ButtonOutlined({ children, className }: Props) {
  return (
    <button
      className={`ml-2 flex cursor-pointer items-center rounded border border-primary/50 bg-surface py-2 px-3 text-primary duration-200 hover:bg-primary/5 ${className}`}
    >
      {children}
    </button>
  );
}
