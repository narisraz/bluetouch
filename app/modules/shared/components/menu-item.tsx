import type { ReactElement} from "react";
import { useState } from "react";

interface Props {
  icon: ReactElement;
  label: string;
  selected?: boolean;
}

export function MenuItem({ icon, label, selected }: Props) {
  const [over, setOver] = useState(false);
  return (
    <li
      className={`m-2 flex items-center rounded-xl p-4 hover:cursor-pointer ${
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
