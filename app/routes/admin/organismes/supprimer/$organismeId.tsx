import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { deleteOrganisme } from "~/admin/infrastructure/dependencies";

interface ActionData {
  success: boolean
}

export async function loader({ params }: LoaderArgs) {
  const organismeId = params.organismeId

  if (organismeId) {
    const result = await deleteOrganisme.execute(organismeId)
    return json<ActionData>({
      success: result.isSuccess
    })
  }

  return json({
    success: false
  })
}