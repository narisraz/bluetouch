import type { Organisme } from "~/domain/entities/Organisme";
import type { ResponseStatus } from "~/domain/usecases/responses/ResponseStatus";

export interface OrganismeRepository {
  getByNom(nom: string): Promise<ResponseStatus<Organisme>>;
  updateEtatByNom(nom: string): Promise<ResponseStatus<void>>;
  updateOrganisme(organisme: Organisme): Promise<ResponseStatus<void>>;
  getAllBetweenContractDates(
    from: Date,
    to: Date
  ): Promise<ResponseStatus<Organisme>>;
  addOrganisme(organisme: Organisme): Promise<ResponseStatus<void>>;
}
