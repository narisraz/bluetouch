import { db } from "app/database";
import type { Organisme } from "~/admin/domain/entities/Organisme";
import type { OrganismeRepository } from "~/admin/domain/ports/OrganismeRepository";
import type { ResponseStatus } from "~/admin/domain/usecases/responses/ResponseStatus";

import { OrganismeMapper } from "../mappers/organisme.mapper";

export class OrganismeGateway implements OrganismeRepository {
	async countOrganisme(): Promise<ResponseStatus<number>> {
		try {
			const count = await db.organisme.count();
			return ({
				isSuccess: true,
				data: count
			});
		} catch (_) {
			return ({
				isSuccess: false,
			});
		}
	}
	getByNom(nom: string): Promise<ResponseStatus<Organisme>> {
			throw new Error("Method not implemented.");
	}
	updateEtatByNom(nom: string): Promise<ResponseStatus<void>> {
			throw new Error("Method not implemented.");
	}
	updateOrganisme(organisme: Organisme): Promise<ResponseStatus<void>> {
			throw new Error("Method not implemented.");
	}
	async getAll(from: number, to: number): Promise<ResponseStatus<Organisme[]>> {
		return db.organisme.findMany({
			skip: from,
			take: to,
		})
			.then(organismes => organismes.map(OrganismeMapper.fromJson))
			.then(organismes => ({
					isSuccess: true,
					data: organismes
				}))
			.catch(_ => ({
				isSuccess: false,
			}))
	}
	async addOrganisme(organisme: Organisme): Promise<ResponseStatus<void>> {
		return db.organisme.create({
			data: OrganismeMapper.toJson(organisme)
		})
			.then(_ => ({
					isSuccess: true,
				}))
			.catch(_ => ({
					isSuccess: false
				})
				);
	}
}