import { Link, useLocation } from "@remix-run/react";
import { RiDashboardLine, RiOrganizationChart } from "react-icons/ri";

import { AdminRouteId, getRouteById } from "../utils/admin.routes";
import { MenuItem } from "./menu-item";

export function Menu() {
  const location = useLocation()

  function isSelected(id: string) {
    return location.pathname.includes(getRouteById(id).url)
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
