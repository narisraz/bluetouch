
import type { Organisme } from "../entities/Organisme";
import type { OrganismeRepository } from "../ports/OrganismeRepository";
import type { ListOrganismesRequest } from "./requests/ListOrganismesRequest";
import type { ResponseStatus } from "./responses/ResponseStatus";
import type { IUseCase } from "./UseCase";

export class ListOrganismes
  implements
  IUseCase<
  ListOrganismesRequest,
      Promise<ResponseStatus<Organisme[]>>
    >
{
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(
    request: ListOrganismesRequest
  ): Promise<ResponseStatus<Organisme[]>> {
    return this._organismeRepository.getAll(
      request.from,
      request.to
    );
  }
}
