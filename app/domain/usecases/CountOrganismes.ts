import type { IUseCase } from "~/domain/usecases/UseCase";

import type { OrganismeRepository } from "../ports/OrganismeRepository";
import type { ResponseStatus } from "./responses/ResponseStatus";

export class CountOrganismes implements IUseCase<void, Promise<ResponseStatus<number>>> {
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(): Promise<ResponseStatus<number>> {
    return this._organismeRepository.countOrganisme();
  }
}