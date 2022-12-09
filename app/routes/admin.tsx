import { Outlet, useLocation } from "@remix-run/react";

import { Breadcrumb } from "~/shared/components/breadcrumb";
import { Menu } from "~/shared/components/menu";
import { getRouteByLocation } from "~/shared/utils/admin.routes";

export default function AdminLayout() {
  const location = useLocation()
  const currentRoute = getRouteByLocation(location)
  return (
    <div className="flex">
      <div className="sticky top-0 h-screen w-72 border-r">
        <div className="flex justify-center border-b">
          <div className="m-9">Bluetouch</div>
        </div>
        <Menu />
      </div>
      <div className="flex-1 bg-background">
        <div className="flex justify-between border-b bg-surface p-4">
          <Breadcrumb routeId={currentRoute.id} />

          <div className="flex">
            <div className="px-2">Naris</div>
            <div className="h-8 w-8 rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="m-4"><Outlet /></div>
      </div>
    </div>
  )
}