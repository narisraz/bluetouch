import type { Organisme } from "../entities/Organisme";
import type { ResponseStatus } from "../usecases/responses/ResponseStatus";

export interface OrganismeRepository {
  searchOrganisme(criteria: string): Promise<ResponseStatus<Organisme[]>>;
  findOne(id: string): Promise<ResponseStatus<Organisme>>;
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
