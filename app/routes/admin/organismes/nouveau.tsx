import type { ActionArgs} from "@remix-run/node";
import { useActionData, useTransition } from "@remix-run/react";
import { parseFormAny } from "react-zorm";

import { addOrganisme } from "~/admin/infrastructure/dependencies";
import { OrganismeMapper } from "~/admin/infrastructure/mappers/organisme.mapper";
import { NouvelOrganismeForm, NouvelOrganisme } from "~/admin/presentation/NouvelOrganisme";
import { assertIsPost } from "~/shared/utils";

export const action = async ({request}: ActionArgs) => {
  assertIsPost(request)
  const formData = await request.formData();
  const result = await NouvelOrganismeForm.safeParseAsync(parseFormAny(formData));

  if (result.success) {
    const organisme = OrganismeMapper.fromJson(result.data);
    return await addOrganisme.execute(organisme)
      .then(response => ({
          success: response.isSuccess
        }))
  }

  return null;
}

export function meta() {
  return { title: "Nouvel Organisme" };
}

export default function NouvelOrganismePage() {
  const result = useActionData();
  const { state } = useTransition();

  return <NouvelOrganisme submitting={state === "submitting"} isSaved={result?.success} />
}