import Organisme from "../entities/Organsime";
import OrganismeRepository from "../ports/OrganismeRepository";
import ResponseStatus from "./responses/ResponseStatus";
import UseCase from "./UseCase";

class EditOrganisme
  implements UseCase<Organisme, Promise<ResponseStatus<void>>>
{
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(organisme: Organisme): Promise<ResponseStatus<void>> {
    return this._organismeRepository.updateOrganisme(organisme);
  }
}

export default EditOrganisme;
