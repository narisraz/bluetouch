import Organisme from "../entities/Organsime";
import ResponseStatus from "../usecases/responses/ResponseStatus";

interface OrganismeRepository {
  getByNom(nom: string): Promise<ResponseStatus<Organisme>>;
  updateEtatByNom(nom: string): Promise<ResponseStatus<void>>;
  updateOrganisme(organisme: Organisme): Promise<ResponseStatus<void>>;
  getAllBetweenContractDates(
    from: Date,
    to: Date
  ): Promise<ResponseStatus<Organisme>>;
  addOrganisme(organisme: Organisme): Promise<ResponseStatus<void>>;
}

export default OrganismeRepository;
