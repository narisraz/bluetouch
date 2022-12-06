import type { Organisme } from "../entities/Organisme";
import type { OrganismeRepository } from "../ports/OrganismeRepository";
import type { ResponseStatus } from "./responses/ResponseStatus";
import type { IUseCase } from "./UseCase";

export class SearchOrganisme implements IUseCase<string, Promise<ResponseStatus<Organisme[]>>> {
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(criteria: string): Promise<ResponseStatus<Organisme[]>> {
    return this._organismeRepository.searchOrganisme(criteria);
  }
}