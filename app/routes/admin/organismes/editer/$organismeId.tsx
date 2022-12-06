import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { parseFormAny } from "react-zorm";

import type { Organisme } from "~/admin/domain/entities/Organisme";
import { findOrganisme, updateOrganisme } from "~/admin/infrastructure/dependencies";
import { OrganismeMapper } from "~/admin/infrastructure/mappers/organisme.mapper";
import { FormulaireOrganisme, OrganismeForm } from "~/admin/presentation/FormulaireOrganisme";
import { AlertSuccess } from "~/shared/components/alert";
import { assertIsPost } from "~/shared/utils";

export const action = async ({request, params}: ActionArgs) => {
  assertIsPost(request)
  const formData = await request.formData();
  const result = await OrganismeForm.safeParseAsync(parseFormAny(formData));

  if (result.success) {
    const organismeId = params.organismeId ?? "";
    const organisme = {...OrganismeMapper.fromJson(result.data), id: organismeId};
    return updateOrganisme.execute(organisme)
      .then(response => ({
        success: response.isSuccess
      }));
  }

  return null;
}

interface LoaderData {
  organisme?: Organisme
}

export async function loader({ params }: LoaderArgs) {
  const organismeId = params.organismeId ?? "";

  const organisme = await findOrganisme.execute(organismeId)

  if (!organisme.isSuccess) {
    return json<LoaderData>({})
  }

  return json<LoaderData>({
    organisme: organisme.data
  })
}

export function meta() {
  return {
    title: "Edition organisme"
  }
}

export default function EditerOrganisme() {
  const data = useLoaderData<LoaderData>()
  const result = useActionData();
  const { state } = useTransition();

  if (!data.organisme) {
    return null
  }

  return <>
    <FormulaireOrganisme submitting={state === "submitting"} isSaved={result?.success} organisme={data.organisme} />
    {result?.success && <AlertSuccess>Organisme mis à jour correctement</AlertSuccess>}
  </>
}