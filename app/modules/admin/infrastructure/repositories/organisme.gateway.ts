import { db } from "app/database";
import type { Organisme } from "~/admin/domain/entities/Organisme";
import type { OrganismeRepository } from "~/admin/domain/ports/OrganismeRepository";
import type { ResponseStatus } from "~/admin/domain/usecases/responses/ResponseStatus";
import { getSupabase } from "~/integrations/supabase";

import { OrganismeMapper } from "../mappers/organisme.mapper";

export class OrganismeGateway implements OrganismeRepository {
	async searchOrganisme(criteria: string): Promise<ResponseStatus<Organisme[]>> {
		return getSupabase()
			.from('Organisme')
			.select()
			.or(`nom.ilike.*${criteria}*,responsable.ilike.*${criteria}*`)
			.then(response => ({
					isSuccess: response.status === 200,
					data: response.data?.map(OrganismeMapper.fromJson)
				}))
	}
	async findOne(id: string): Promise<ResponseStatus<Organisme>> {
		return db.organisme.findFirst({
			where: {
				id: id
			}
		})
			.then(OrganismeMapper.fromJson)
			.then(organisme => ({
				isSuccess: true,
				data: organisme
			}))
			.catch(_ => ({
				isSuccess: false,
			}))
	}
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
	async updateOrganisme(organisme: Organisme): Promise<ResponseStatus<void>> {
		return db.organisme.update({
			where: {
				id: organisme.id
			},
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