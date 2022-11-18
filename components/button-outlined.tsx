"use client";

import { Props } from "./props";

export default function ButtonOutlined({ children, className }: Props) {
  return (
    <button
      className={`flex ml-2 py-2 px-3 hover:bg-primary/5 items-center text-primary bg-surface border-primary/50 border rounded cursor-pointer duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
