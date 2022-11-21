import { Errors } from "~/domain/entities/Errors";
import type { OrganismeRepository } from "~/domain/ports/OrganismeRepository";
import type { ResponseStatus } from "~/domain/usecases/responses/ResponseStatus";
import type { IUseCase } from "~/domain/usecases/UseCase";

export class UpdateEtatOrganisme
  implements IUseCase<string, Promise<ResponseStatus<void>>>
{
  private _organismeRepository: OrganismeRepository;

  constructor(organismeRepository: OrganismeRepository) {
    this._organismeRepository = organismeRepository;
  }

  async execute(nom: string): Promise<ResponseStatus<void>> {
    const getOrganisme = await this._organismeRepository.getByNom(nom);
    if (getOrganisme.isSuccess) {
      return this._organismeRepository.updateEtatByNom(nom);
    }
    return await Promise.resolve({
      isSuccess: false,
      error: Errors.OrganismeNotFound,
    });
  }
}
