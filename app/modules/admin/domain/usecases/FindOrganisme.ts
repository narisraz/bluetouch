import type { Organisme } from "../entities/Organisme";
import type { OrganismeRepository } from "../ports/OrganismeRepository";
import type { ResponseStatus } from "./responses/ResponseStatus";
import type { IUseCase } from "./UseCase";

export class FindOrganisme implements IUseCase<string, Promise<ResponseStatus<Organisme>>> {
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(id: string): Promise<ResponseStatus<Organisme>> {
    return this._organismeRepository.findOne(id);
  }
}