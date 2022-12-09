import { Link, useLocation } from "@remix-run/react";
import { RiDashboardLine, RiOrganizationChart } from "react-icons/ri";

import type { Route } from "../utils/admin.routes";
import { AdminRouteId, routes } from "../utils/admin.routes";
import { MenuItem } from "./menu-item";

export function Menu() {
  const location = useLocation()

  function isSelected(id: string) {
    return location.pathname == getRouteById(id).url
  }

  function getRouteById(id: string): Route {
    return routes.find(route => route.id == id) ?? routes[0]
  }

  return (
    <ul className="my-2">
      <Link to={getRouteById(AdminRouteId.DASHBOARD).url}>
        <MenuItem label={getRouteById(AdminRouteId.DASHBOARD).name} icon={<RiDashboardLine />} selected={isSelected(AdminRouteId.DASHBOARD)} />
      </Link>
      <Link to={getRouteById(AdminRouteId.LISTE_ORGANISMES).url}>
        <MenuItem
          label={getRouteById(AdminRouteId.LISTE_ORGANISMES).name}
          icon={<RiOrganizationChart />}
          selected={isSelected(AdminRouteId.LISTE_ORGANISMES)}
        />
      </Link>
    </ul>
  );
}
