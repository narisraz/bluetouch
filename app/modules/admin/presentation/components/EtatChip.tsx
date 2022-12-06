import { Etat } from "~/admin/domain/value-objects/Etat"
import { Chip } from "~/shared/components/chip"
import type { Props } from "~/shared/components/props"

interface EtatChipProps extends Props {
  etatId: string
}

export function EtatChip({etatId}: EtatChipProps) {
  let bgcolor = "tes"
  if (etatId == "0") {
    bgcolor = "bg-success"
  } else {
    bgcolor = "bg-error"
  }

  const label = Object.values(Etat)
    .map((_, index, etats) => ({
      key: index.toString(),
      label: etats[index],
    }))
    .find(etat => etat.key == etatId)
    ?.label;

  return <Chip className={bgcolor}>{label}</Chip>
}