import { RiArrowRightSLine, RiHome2Line } from "react-icons/ri";

import type { Route } from "../utils/admin.routes";
import { routes } from "../utils/admin.routes";
import { Link } from "./link";

interface BreadcrumbProps {
  routeId: string
}

export function Breadcrumb({routeId}: BreadcrumbProps) {
  const currentRoute = routes.find(route => route.id == routeId) ?? routes[0]
  const routeIds = currentRoute.breadcrumb
  let breadcrumbRoutes: Route[] = routeIds.map(id => routes.find(route => route.id == id) ?? routes[0])
  let lastRoute = breadcrumbRoutes.pop() ?? routes[0]

  return <div className="flex items-center gap-1">
    <Link href="/">
      <RiHome2Line />
    </Link>
    {breadcrumbRoutes.map(function (route) {
      return <div className="flex items-center gap-1" key={route.id}>
        <RiArrowRightSLine />
        <Link href={route.url}>{route.name}</Link>
      </div>;
    }
    )}
    <RiArrowRightSLine />
    <div className="font-semibold">{lastRoute.name}</div>
  </div>;
}