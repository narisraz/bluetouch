import type { ActionArgs} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { parseFormAny } from "react-zorm";

import type { Organisme } from "~/admin/domain/entities/Organisme";
import { countOrganismes, listOrganismes, searchOrganisme } from "~/admin/infrastructure/dependencies";
import { ListOrganismes } from "~/admin/presentation/ListeOrganismes";
import { assertIsPost } from "~/shared/utils";

interface ActionData {
  organismesCount: number,
  organismes: Organisme[]
}

export async function action({request}: ActionArgs) {
  assertIsPost(request)
  const formData = await request.formData();
  const data = parseFormAny(formData)

  const search = data['search']

  if (!search)
    return null
  
  const result = await searchOrganisme.execute(search)

  if (!result.isSuccess) {
    return null
  }

  return json<ActionData>({
    organismes: result.data ?? [],
    organismesCount: 0
  })
}

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
  let {organismesCount: total, organismes} = useLoaderData<LoaderData>()
  const result = useActionData<ActionData>()
  const { state } = useTransition();

  if (result) {
    organismes = result?.organismes
  }  
  
  return <ListOrganismes total={total} organismes={organismes} searching={state === "submitting"} />
}