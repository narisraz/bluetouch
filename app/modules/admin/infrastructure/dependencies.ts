import { AddOrganisme } from "../domain/usecases/AddOrganisme";
import { CountOrganismes } from "../domain/usecases/CountOrganismes";
import { DeleteOrganisme } from "../domain/usecases/DeleteOrganisme";
import { FindOrganisme } from "../domain/usecases/FindOrganisme";
import { ListOrganismes } from "../domain/usecases/ListOrganismes";
import { SearchOrganisme } from "../domain/usecases/SearchOrganisme";
import { UpdateOrganisme } from "../domain/usecases/UpdateOrganisme";
import { OrganismeGateway } from "./repositories/organisme.gateway";

const organismeGateway = new OrganismeGateway()

export const addOrganisme = new AddOrganisme(organismeGateway)
export const countOrganismes = new CountOrganismes(organismeGateway)
export const listOrganismes = new ListOrganismes(organismeGateway);
export const findOrganisme = new FindOrganisme(organismeGateway)
export const updateOrganisme = new UpdateOrganisme(organismeGateway)
export const searchOrganisme = new SearchOrganisme(organismeGateway)
export const deleteOrganisme = new DeleteOrganisme(organismeGateway)