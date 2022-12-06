import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { Organisme } from "~/admin/domain/entities/Organisme";
import { countOrganismes, listOrganismes } from "~/admin/infrastructure/dependencies";
import { ListOrganismes } from "~/admin/presentation/ListeOrganismes";

interface LoaderData {
  organismesCount: number,
  organismes: Organisme[]
}

export async function loader() {
  const organismesCount = await countOrganismes.execute();

  if (!organismesCount.isSuccess || (organismesCount?.data as number) == 0) {
    return json<LoaderData>({
      organismes: [],
      organismesCount: 0
    })
  }

  const organismes = await listOrganismes.execute({
    from: 0,
    to: 9
  })

  if (!organismes.isSuccess) {
    return json<LoaderData>({
      organismes: [],
      organismesCount: 0
    })
  }

  return json<LoaderData>({
    organismes: organismes.data ?? [],
    organismesCount: organismesCount.data ?? 0
  })
}

export function meta() {
  return { title: "Les des organismes" };
}

export default function ListOrganismesPage() {
  const {organismesCount: total, organismes} = useLoaderData<LoaderData>()
  
  return <ListOrganismes total={total} organismes={organismes} />
}