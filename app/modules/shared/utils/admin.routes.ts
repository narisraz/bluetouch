export enum AdminRouteId {
  DASHBOARD = "DASHBOARD",
  LISTE_ORGANISMES = "LISTE_ORGANISMES",
  NOUVEL_ORGANISME = "NOUVEL_ORGANISME",
  EDITER_ORGANISME = "EDITER_ORGANISME"
}

export interface Route {
  id: string
  name: string
  url: string
}

export const routes: Route[] = [
  {
    id: AdminRouteId.DASHBOARD,
    name: "Tableau de bord",
    url: "/admin/tableau-de-bord"
  },
  {
    id: AdminRouteId.LISTE_ORGANISMES,
    name: "Liste des organismes",
    url: "/admin/organismes"
  },
  {
    "id": AdminRouteId.NOUVEL_ORGANISME,
    name: "Nouvel organisme",
    url: "/admin/organismes/nouvel"
  },
  {
    "id": AdminRouteId.EDITER_ORGANISME,
    name: "Edition organisme",
    url: "/admin/organismes/edit"
  }
]