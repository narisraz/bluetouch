import { Etat } from "~/admin/domain/value-objects/Etat";
import type { Option } from "~/shared/components/select";

export const etatToOptions: Option[] = Object.values(Etat).map((_, index, etats) => ({
  key: index.toString(),
  label: etats[index],
  value: index.toString(),
}));