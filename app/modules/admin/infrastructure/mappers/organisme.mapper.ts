import { Organisme } from "~/admin/domain/entities/Organisme";
import { Etat } from "~/admin/domain/value-objects/Etat";

export class OrganismeMapper {
  static fromJson(json: any): Organisme {
		const etat = Object.values(Etat)
			.find((_, index) => json['etat'] == index) ?? Etat.ACTIVE
		const organisme = new Organisme()
		organisme.id = json['id'];
		organisme.email = json['email'];
		organisme.etat = etat;
		organisme.nom = json['nom'];
		organisme.responsable = json['responsable'];
		organisme.tel = json['tel'];
		return organisme;
	}

	static toJson(organisme: Organisme) {
		return {
			id: organisme.id,
			email: organisme.email,
			nom: organisme.nom,
			responsable: organisme.responsable,
			tel: organisme.tel,
			etat: organisme.etat
		}
	}
}