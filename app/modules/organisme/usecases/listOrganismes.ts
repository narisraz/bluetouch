import { ListOrganismes } from "~/domain/usecases/ListOrganismes";

import { OrganismeGateway } from "../organisme.gateway";

export const listOrganismes = new ListOrganismes(new OrganismeGateway());