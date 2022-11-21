import type { Organisme } from "~/domain/entities/Organisme";
import type { OrganismeRepository } from "~/domain/ports/OrganismeRepository";
import type { ResponseStatus } from "~/domain/usecases/responses/ResponseStatus";
import type { IUseCase } from "~/domain/usecases/UseCase";

export class EditOrganisme
  implements IUseCase<Organisme, Promise<ResponseStatus<void>>>
{
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  execute(organisme: Organisme): Promise<ResponseStatus<void>> {
    return this._organismeRepository.updateOrganisme(organisme);
  }
}
