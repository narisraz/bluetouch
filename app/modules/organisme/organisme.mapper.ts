import { Organisme } from "~/domain/entities/Organisme";

export class OrganismeMapper {
  static fromJson(json: any): Organisme {
		const organisme = new Organisme()
		organisme.email = json['email'];
		organisme.etat = json['etat'];
		organisme.nom = json['nom'];
		organisme.responsable = json['responsable'];
		organisme.tel = json['tel'];
		return organisme;
	}
}