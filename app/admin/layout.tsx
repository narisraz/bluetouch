import Link from "@/components/link";
import Menu from "@/components/menu";
import { RiArrowRightSLine, RiHome2Line } from "react-icons/ri";

export default function AdminLayput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="sticky top-0 h-screen w-72 border-r">
        <div className="flex justify-center border-b">
          <div className="m-9">Bluetouch</div>
        </div>
        <Menu />
      </div>
      <div className="flex-1 bg-background">
        <div className="flex p-4 bg-surface border-b justify-between">
          <div className="flex gap-1 items-center">
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
            <div className="w-8 h-8 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="m-4">{children}</div>
      </div>
    </div>
  );
}
