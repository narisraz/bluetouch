import { Outlet } from "@remix-run/react";
import { RiArrowRightSLine, RiHome2Line } from "react-icons/ri";

import { Link } from "~/shared/components/link";
import { Menu } from "~/shared/components/menu";

export default function AdminLayout() {
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
          <div className="flex items-center gap-1">
            <Link href="/admin">
              <RiHome2Line />
            </Link>
            <RiArrowRightSLine />
            <Link href="/admin/organismes">Organismes</Link>
            <RiArrowRightSLine />
            <div className="font-semibold">Nouvel organisme</div>
          </div>

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