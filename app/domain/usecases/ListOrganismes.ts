import type { Organisme } from "~/domain/entities/Organisme";
import type { OrganismeRepository } from "~/domain/ports/OrganismeRepository";
import type { ListOrganismesRequest } from "~/domain/usecases/requests/ListOrganismes";
import type { ResponseStatus } from "~/domain/usecases/responses/ResponseStatus";
import type { IUseCase } from "~/domain/usecases/UseCase";

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
