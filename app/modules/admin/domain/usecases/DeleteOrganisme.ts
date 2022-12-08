import type { OrganismeRepository } from "../ports/OrganismeRepository";
import type { ResponseStatus } from "./responses/ResponseStatus";
import type { IUseCase } from "./UseCase";

export class DeleteOrganisme implements IUseCase<string, Promise<ResponseStatus<void>>> {
  private _organismeRepository: OrganismeRepository

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(organismeId: string): Promise<ResponseStatus<void>> {
    return this._organismeRepository.deleteOrganisme(organismeId)
  }
}