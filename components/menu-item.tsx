"use client";
import { ReactElement, useState } from "react";

interface Props {
  icon: ReactElement;
  label: string;
  selected?: boolean;
}

export default function MenuItem({ icon, label, selected }: Props) {
  const [over, setOver] = useState(false);
  return (
    <li
      className={`flex m-2 p-4 items-center hover:cursor-pointer rounded-xl ${
        over && !selected && "hover:bg-primary/5"
      } ${selected && "bg-primary/20 font-semibold"}`}
      onMouseOver={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      <div className="mr-4">{icon}</div>
      {label}
    </li>
  );
}
