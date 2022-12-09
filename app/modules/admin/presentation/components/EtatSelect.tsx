import { Etat } from "~/admin/domain/value-objects/Etat";
import type { Option, SelectProps } from "~/shared/components/select";
import { Select } from "~/shared/components/select";

interface EtatSelectProps extends SelectProps {}

export function EtatSelect({ name, onChange, selected }: EtatSelectProps) {
  function getLabel(etat: Etat): string {
    if (etat === Etat.ACTIVE) {
      return "Active"
    }
    return "Suspendu"
  }

  const etatToOptions: Option[] = Object.values(Etat).map((value, index) => ({
    key: index.toString(),
    label: getLabel(value),
    value,
  }));

  return <Select
    name={name}
    options={etatToOptions}
    selected={selected}
    onChange={onChange}
  />
}