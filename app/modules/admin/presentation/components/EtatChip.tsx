import { Etat } from "~/admin/domain/value-objects/Etat"
import { Chip } from "~/shared/components/chip"
import type { Props } from "~/shared/components/props"

interface EtatChipProps extends Props {
  etat: Etat
}

export function EtatChip({etat}: EtatChipProps) {
  let bgcolor = "tes"
  if (etat == Etat.ACTIVE) {
    bgcolor = "bg-success"
  } else {
    bgcolor = "bg-error"
  }

  return <Chip className={bgcolor}>{etat}</Chip>
}