import Errors from "../entities/Errors";
import OrganismeRepository from "../ports/OrganismeRepository";
import ResponseStatus from "./responses/ResponseStatus";
import UseCase from "./UseCase";

class UpdateEtatOrganisme
  implements UseCase<string, Promise<ResponseStatus<void>>>
{
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  async execute(nom: string): Promise<ResponseStatus<void>> {
    const getOrganisme = await this._organismeRepository.getByNom(nom);
    if (getOrganisme.isSuccess) {
      return this._organismeRepository.updateEtatByNom(nom);
    }
    return await Promise.resolve({
      isSuccess: false,
      error: Errors.OrganismeNotFound,
    });
  }
}

export default UpdateEtatOrganisme;
