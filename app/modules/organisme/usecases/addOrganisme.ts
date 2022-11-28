import { AddOrganisme } from "~/domain/usecases/AddOrganisme";
import { OrganismeGateway } from "../organisme.gateway";

export const addOrganisme = new AddOrganisme(new OrganismeGateway())