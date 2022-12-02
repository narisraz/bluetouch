import { db } from "~/database";
import type { Organisme } from "~/domain/entities/Organisme";
import type { OrganismeRepository } from "~/domain/ports/OrganismeRepository";
import type { ResponseStatus } from "~/domain/usecases/responses/ResponseStatus";

import { OrganismeMapper } from "./organisme.mapper";

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
	async addOrganisme(organisme: Organisme): Promise<ResponseStatus<void>> {
		return db.organisme.create({
			data: OrganismeMapper.toJson(organisme)
		})
			.then(_ => ({
					isSuccess: true,
				}))
			.catch(e => ({
					isSuccess: false
				})
				);
	}
}