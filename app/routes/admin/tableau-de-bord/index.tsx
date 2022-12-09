import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { countOrganismes } from "~/admin/infrastructure/dependencies";
import { AdminRouteId, getRouteById } from "~/shared/utils/admin.routes";

interface LoaderData {
  organismesCount: number
}

export async function loader() {
  const organismesCount = await countOrganismes.execute()

  if (!organismesCount.isSuccess) {
    return json<LoaderData>({
      organismesCount: 0
    })
  }

  return json<LoaderData>({
    organismesCount: organismesCount.data ?? 0
  })
}

export function meta() {
  return { title: getRouteById(AdminRouteId.DASHBOARD).name };
}

export default function TableauDeBord() {
  const {organismesCount} = useLoaderData<LoaderData>()
  return (
    <div className="grid grid-cols-3 gap-4 font-bold">
      <div className="flex items-center gap-2 rounded bg-primary p-4">
        <div className="rounded bg-white/20 py-2 px-3 text-4xl font-bold">{organismesCount}</div>
        <div className="uppercase">Organismes</div>
      </div>
      <div className="flex items-center gap-2 rounded bg-success p-4">
        <div className="rounded bg-white/20 py-2 px-3 text-4xl font-bold">0</div>
        <div className="uppercase">SAEP</div>
      </div>
      <div className="flex items-center gap-2 rounded bg-error p-4">
        <div className="rounded bg-white/20 py-2 px-3 text-4xl font-bold">0</div>
        <div className="uppercase">Abonnées</div>
      </div>
    </div>
  );
}