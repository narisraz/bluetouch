import Menu from "@/components/menu";

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
          <div className="flex gap-1">
            /<div className="text-primary cursor-pointer">organismes</div>/
            <div className="text-primary cursor-pointer">nouveau</div>
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
