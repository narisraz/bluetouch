import type { Location } from "@remix-run/react"

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
  breadcrumb: AdminRouteId[]
}

export function getRouteById(id: string): Route {
  return routes.find(route => route.id == id) ?? routes[0]
}

export function getRouteByLocation(location: Location) {
  return routes.filter(route => location.pathname.includes(route.url)).pop() ?? routes[0]
}

export const routes: Route[] = [
  {
    id: AdminRouteId.DASHBOARD,
    name: "Tableau de bord",
    url: "/admin/tableau-de-bord",
    breadcrumb: [AdminRouteId.DASHBOARD]
  },
  {
    id: AdminRouteId.LISTE_ORGANISMES,
    name: "Liste des organismes",
    url: "/admin/organismes",
    breadcrumb: [AdminRouteId.LISTE_ORGANISMES]
  },
  {
    "id": AdminRouteId.NOUVEL_ORGANISME,
    name: "Nouvel organisme",
    url: "/admin/organismes/nouveau",
    breadcrumb: [AdminRouteId.LISTE_ORGANISMES, AdminRouteId.NOUVEL_ORGANISME]
  },
  {
    "id": AdminRouteId.EDITER_ORGANISME,
    name: "Edition organisme",
    url: "/admin/organismes/editer",
    breadcrumb: [AdminRouteId.LISTE_ORGANISMES, AdminRouteId.EDITER_ORGANISME]
  }
]