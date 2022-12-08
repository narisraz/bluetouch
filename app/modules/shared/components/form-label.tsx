import type { Props } from "./props";

export function FormLabel({ children }: Props) {
  return <td className="pt-2 align-top font-semibold">{ children }</td>
}