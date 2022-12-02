import { CountOrganismes } from "~/domain/usecases/CountOrganismes";

import { OrganismeGateway } from "../organisme.gateway";

export const countOrganismes = new CountOrganismes(new OrganismeGateway());