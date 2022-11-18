import Menu from "../../components/menu";

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
      <div className="flex-1">
        <div className="flex p-4 bg-surface justify-end border-b">
          <div className="px-2">Naris</div>
          <div className="w-8 h-8 bg-primary rounded-full"></div>
        </div>
        <div className="m-4">{children}</div>
      </div>
    </div>
  );
}
