import { AddOrganisme } from "../domain/usecases/AddOrganisme";
import { CountOrganismes } from "../domain/usecases/CountOrganismes";
import { ListOrganismes } from "../domain/usecases/ListOrganismes";
import { OrganismeGateway } from "./repositories/organisme.gateway";

const organismeGateway = new OrganismeGateway()

export const addOrganisme = new AddOrganisme(organismeGateway)
export const countOrganismes = new CountOrganismes(organismeGateway)
export const listOrganismes = new ListOrganismes(organismeGateway);