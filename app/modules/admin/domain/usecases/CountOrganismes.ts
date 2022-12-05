import type { OrganismeRepository } from "../ports/OrganismeRepository";
import type { ResponseStatus } from "./responses/ResponseStatus";
import type { IUseCase } from "./UseCase";

export class CountOrganismes implements IUseCase<void, Promise<ResponseStatus<number>>> {
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(): Promise<ResponseStatus<number>> {
    return this._organismeRepository.countOrganisme();
  }
}