import { Organisme } from "~/admin/domain/entities/Organisme";

export class OrganismeMapper {
  static fromJson(json: any): Organisme {
		const organisme = new Organisme()
		organisme.id = json['id'];
		organisme.email = json['email'];
		organisme.etat = json["etat"];
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