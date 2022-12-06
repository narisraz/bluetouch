import type { Organisme } from "../entities/Organisme";
import type { OrganismeRepository } from "../ports/OrganismeRepository";
import type { ResponseStatus } from "./responses/ResponseStatus";
import type { IUseCase } from "./UseCase";

export class UpdateOrganisme implements IUseCase<Organisme, Promise<ResponseStatus<void>>> {
  private _organismeRepository: OrganismeRepository

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(organisme: Organisme): Promise<ResponseStatus<void>> {
    return this._organismeRepository.updateOrganisme(organisme);
  }

}