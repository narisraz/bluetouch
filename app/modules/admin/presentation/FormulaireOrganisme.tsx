import { useState } from "react";

import { Form } from "@remix-run/react";
import { RiSaveLine } from "react-icons/ri";
import { useZorm } from "react-zorm";
import { z } from "zod";

import { AlertSuccess } from "~/shared/components/alert";
import { ButtonContained } from "~/shared/components/button-contained";
import { ButtonOutlined } from "~/shared/components/button-outlined";
import { FormLabel } from "~/shared/components/form-label";
import { Input } from "~/shared/components/input";
import { Link } from "~/shared/components/link";

import type { Organisme } from "../domain/entities/Organisme";
import { EtatSelect } from "./components/EtatSelect";

interface FormulaireOrganismeProps {
  submitting: boolean,
  isSaved: boolean,
  organisme?: Organisme
}

export const OrganismeForm = z.object({
  nom: z.string().min(1, "Champs obligatoire"),
  responsable: z.string().min(1, "Champs obligatoire"),
  tel: z.string().optional(),
  email: z
    .string()
    .email("Email invalide"),
  etat: z.string()
})

export function FormulaireOrganisme({ submitting, isSaved, organisme }: FormulaireOrganismeProps) {
  const zo = useZorm("FormulaireOrganisme", OrganismeForm);
  if (isSaved) {
    zo.form?.reset()
  }

  const [selectedEtat, setSelectedEtat] = useState(organisme?.etat ?? "0");

  return (
    <div className="flex-1 rounded bg-surface p-4">
      <div className="border-b pb-4">
        <div className="text-xl font-semibold">Nouvel organisme</div>
        <div>
          Veuillez saisir les informations concernant le nouvel organisme
        </div>
      </div>

      <Form ref={zo.ref} method="post">
        <table className="mt-3 table-auto border-separate border-spacing-2">
          <tbody>
            <tr>
              <FormLabel>Nom de l'organisme</FormLabel>
              <td>
                <Input
                  name={zo.fields.nom()}
                  value={organisme?.nom}
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
                  value={organisme?.responsable}
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
                  value={organisme?.tel}
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
                  value={organisme?.email}
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
                <EtatSelect
                  name={zo.fields.etat()}
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
          <ButtonContained type="submit" loading={submitting} start={<RiSaveLine className="mr-2" />}>
            Enregistrer
          </ButtonContained>
        </div>
      </Form>
    </div>
  );
}