import { Organisme } from "~/domain/entities/Organisme";
import { OrganismeRepository } from "~/domain/ports/OrganismeRepository";
import { ResponseStatus } from "~/domain/usecases/responses/ResponseStatus";

export class OrganismeGateway implements OrganismeRepository {
	getByNom(nom: string): Promise<ResponseStatus<Organisme>> {
			throw new Error("Method not implemented.");
	}
	updateEtatByNom(nom: string): Promise<ResponseStatus<void>> {
			throw new Error("Method not implemented.");
	}
	updateOrganisme(organisme: Organisme): Promise<ResponseStatus<void>> {
			throw new Error("Method not implemented.");
	}
	getAllBetweenContractDates(from: Date, to: Date): Promise<ResponseStatus<Organisme>> {
			throw new Error("Method not implemented.");
	}
	addOrganisme(organisme: Organisme): Promise<ResponseStatus<void>> {
			throw new Error("Method not implemented.");
	}
}