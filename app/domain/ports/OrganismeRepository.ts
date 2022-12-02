import type { Organisme } from "~/domain/entities/Organisme";
import type { ResponseStatus } from "~/domain/usecases/responses/ResponseStatus";

export interface OrganismeRepository {
  getByNom(nom: string): Promise<ResponseStatus<Organisme>>;
  updateEtatByNom(nom: string): Promise<ResponseStatus<void>>;
  updateOrganisme(organisme: Organisme): Promise<ResponseStatus<void>>;
  getAll(
    from: number,
    to: number
  ): Promise<ResponseStatus<Organisme[]>>;
  addOrganisme(organisme: Organisme): Promise<ResponseStatus<void>>;
  countOrganisme(): Promise<ResponseStatus<number>>
}
