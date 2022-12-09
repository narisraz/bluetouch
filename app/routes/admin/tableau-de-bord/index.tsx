import { AdminRouteId, getRouteById } from "~/shared/utils/admin.routes";

export function meta() {
  return { title: getRouteById(AdminRouteId.DASHBOARD).name };
}

export default function TableauDeBord() {
  return (
    <div>
      Tableau de bord
    </div>
  );
}