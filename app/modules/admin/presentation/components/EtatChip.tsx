import { Etat } from "~/admin/domain/value-objects/Etat"
import { Chip } from "~/shared/components/chip"
import type { Props } from "~/shared/components/props"

interface EtatChipProps extends Props {
  etat: Etat
}

export function EtatChip({etat}: EtatChipProps) {
  let bgcolor = "bg-success"
  let label = "Active"
  if (etat == Etat.SUSPENDU) {
    bgcolor = "bg-error"
    label = "Suspendu"
  }

  return <Chip className={bgcolor}>{label}</Chip>
}