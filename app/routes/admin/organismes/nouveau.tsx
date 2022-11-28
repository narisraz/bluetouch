import { ActionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import { parseFormAny, useZorm } from "react-zorm";
import { z } from "zod";

import { ButtonContained } from "~/components/button-contained";
import { ButtonOutlined } from "~/components/button-outlined";
import { FormLabel } from "~/components/form-label";
import { Input } from "~/components/input";
import { Link } from "~/components/link";
import type { Option} from "~/components/select";
import { Select } from "~/components/select";
import { Etat } from "~/domain/entities/Etat";
import { OrganismeMapper } from "~/modules/organisme/organisme.mapper";
import { addOrganisme } from "~/modules/organisme/usecases/addOrganisme";
import { assertIsPost } from "~/utils";

const NouveauForm = z.object({
  nom: z.string().min(1, "Champs obligatoire"),
  responsable: z.string().min(1, "Champs obligatoire"),
  tel: z.string().optional(),
  email: z
    .string()
    .email("Email invalide"),
  etat: z.string()
});

export const action = async ({request}: ActionArgs) => {
  assertIsPost(request)
  const formData = await request.formData();
  const result = await NouveauForm.safeParseAsync(parseFormAny(formData));

  if (result.success) {
    const organisme = OrganismeMapper.fromJson(result.data);
    addOrganisme.execute(organisme)
      .finally(() => redirect('/admin/organismes'))
  }

  return null;
}

export function meta() {
  return { title: "Nouvel Organisme" };
}

export default function Nouveau() {
  const zo = useZorm("NouveauForm", NouveauForm);
  const options: Option[] = Object.values(Etat).map((_, index, etats) => ({
    key: index.toString(),
    label: etats[index],
    value: index.toString(),
  }));
  const [selectedEtat, setSelectedEtat] = useState("0");
  return (
    <div className="flex-1 rounded bg-surface p-4">
      <div className="border-b pb-4">
        <div className="text-xl font-semibold">Nouvel organisme</div>
        <div>
          Veuillez saisir les informations concernant le nouvel organisme
        </div>
      </div>

      <Form ref={zo.ref} method="post" replace>
        <table className="mt-3 table-auto border-separate border-spacing-2">
          <tbody>
            <tr>
              <FormLabel>Nom de l'organisme</FormLabel>
              <td>
                <Input
                  name={zo.fields.nom()}
                  placeholder="Nom de l'organisme"
                  type="text"
                  className="w-80"
                  error={zo.errors.nom()?.message}
                />                
              </td>
            </tr>
            <tr>
              <FormLabel>Nom du résponsable</FormLabel>
              <td>
                <Input
                  name={zo.fields.responsable()}
                  placeholder="Nom du résponsable"
                  type="text"
                  className="w-80"
                  error={zo.errors.responsable()?.message}
                />
              </td>
            </tr>
            <tr>
              <FormLabel>Tel.</FormLabel>
              <td>
                <Input
                  name={zo.fields.tel()}
                  placeholder="Numéro de téléphoone"
                  type="text"
                  className="w-80"
                />
              </td>
            </tr>
            <tr>
              <FormLabel>Email</FormLabel>
              <td>
                <Input
                  name={zo.fields.email()}
                  placeholder="Email"
                  type="text"
                  className="w-80"
                  error={zo.errors.email()?.message}
                />
              </td>
            </tr>
            <tr>
              <FormLabel>Etat</FormLabel>
              <td>
                <Select
                  name={zo.fields.etat()}
                  options={options}
                  selected={selectedEtat}
                  onChange={setSelectedEtat}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-2">
          <Link href={"/admin/organismes"}>
            <ButtonOutlined>Annuler</ButtonOutlined>
          </Link>
          <ButtonContained type="submit">Enregistrer</ButtonContained>
        </div>
      </Form>
    </div>
  );
}