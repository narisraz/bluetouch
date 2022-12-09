import type { ActionArgs } from "@remix-run/node";
import { useActionData, useTransition } from "@remix-run/react";
import { parseFormAny } from "react-zorm";

import { addOrganisme } from "~/admin/infrastructure/dependencies";
import { OrganismeMapper } from "~/admin/infrastructure/mappers/organisme.mapper";
import { FormulaireOrganisme, OrganismeForm } from "~/admin/presentation/FormulaireOrganisme";
import { AlertSuccess } from "~/shared/components/alert";
import { assertIsPost } from "~/shared/utils";
import { AdminRouteId, getRouteById } from "~/shared/utils/admin.routes";

export const action = async ({request}: ActionArgs) => {
  assertIsPost(request)
  const formData = await request.formData();
  const result = await OrganismeForm.safeParseAsync(parseFormAny(formData));

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
  return { title: getRouteById(AdminRouteId.NOUVEL_ORGANISME).name };
}

export default function NouvelOrganismePage() {
  const result = useActionData();
  const { state } = useTransition();

  return <>
    <FormulaireOrganisme submitting={state === "submitting"} isSaved={result?.success}>
      <div className="mb-1 text-xl font-semibold">Nouvel organisme</div>
      <div>
        Veuillez saisir les informations concernant le nouvel organisme
      </div>
    </FormulaireOrganisme>
    {result?.success && <AlertSuccess>Organisme sauvegardé</AlertSuccess>}
  </>
}