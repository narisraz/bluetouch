import Organisme from "../entities/Organsime";
import OrganismeRepository from "../ports/OrganismeRepository";
import ListOrganismesBetweenContractDatesRequest from "./requests/ListOrganismesBetweenContractDatesRequest";
import ResponseStatus from "./responses/ResponseStatus";
import UseCase from "./UseCase";

class ListOrganismesBetweenContractDates
  implements
    UseCase<
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

export default ListOrganismesBetweenContractDates;
