import type { Organisme } from "~/domain/entities/Organisme";
import type { OrganismeRepository } from "~/domain/ports/OrganismeRepository";
import type { ListOrganismesBetweenContractDatesRequest } from "~/domain/usecases/requests/ListOrganismesBetweenContractDatesRequest";
import type { ResponseStatus } from "~/domain/usecases/responses/ResponseStatus";
import type { IUseCase } from "~/domain/usecases/UseCase";

export class ListOrganismesBetweenContractDates
  implements
  IUseCase<
      ListOrganismesBetweenContractDatesRequest,
      Promise<ResponseStatus<Organisme>>
    >
{
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(
    request: ListOrganismesBetweenContractDatesRequest
  ): Promise<ResponseStatus<Organisme>> {
    return this._organismeRepository.getAllBetweenContractDates(
      request.from,
      request.to
    );
  }
}
