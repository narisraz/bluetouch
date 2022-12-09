import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";

import { getAuthSession } from "~/auth";
import { Breadcrumb } from "~/shared/components/breadcrumb";
import { Menu } from "~/shared/components/menu";
import { getRouteByLocation } from "~/shared/utils/admin.routes";

interface LoaderData {
  isConnected: boolean
}

export async function loader({ request }: LoaderArgs) {
  const authSession = await getAuthSession(request);

  return json<LoaderData>({ 
    isConnected: authSession !== undefined
   });
}

export default function AdminLayout() {
  const {isConnected} = useLoaderData<LoaderData>()
  const location = useLocation()
  const currentRoute = getRouteByLocation(location)
  return (
    <>
      {isConnected
        ? <div className="flex">
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
        : <div className="h-screen flex-1 bg-background">
            <Outlet />
          </div>
      }
      
    </>
  )
}