import { Etat } from "~/admin/domain/value-objects/Etat";
import type { Option, SelectProps } from "~/shared/components/select";
import { Select } from "~/shared/components/select";

interface EtatSelectProps extends SelectProps {}

export function EtatSelect({ name, onChange, selected }: EtatSelectProps) {
  const etatToOptions: Option[] = Object.values(Etat).map((_, index, etats) => ({
    key: index.toString(),
    label: etats[index],
    value: index.toString(),
  }));

  return <Select
    name={name}
    options={etatToOptions}
    selected={selected}
    onChange={onChange}
  />
}