import { useState } from "react";

import { ButtonContained } from "~/components/button-contained";
import { ButtonOutlined } from "~/components/button-outlined";
import { Input } from "~/components/input";
import { Link } from "~/components/link";
import type { Option} from "~/components/select";
import { Select } from "~/components/select";
import { Etat } from "~/domain/entities/Etat";

export function meta() {
  return { title: "Nouvel Organisme" };
}

export default function Nouveau() {
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

      <table className="mt-3 table-auto border-separate border-spacing-2">
        <tbody>
          <tr>
            <td className="font-semibold">Nom de l'organisme</td>
            <td>
              <Input
                name="nom"
                placeholder="Nom de l'organisme"
                type="text"
                className="w-80"
              />
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Nom du résponsable</td>
            <td>
              <Input
                name="responsable"
                placeholder="Nom du résponsable"
                type="text"
                className="w-80"
              />
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Tel.</td>
            <td>
              <Input
                name="tel"
                placeholder="Numéro de téléphoone"
                type="text"
                className="w-80"
              />
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Email</td>
            <td>
              <Input
                name="email"
                placeholder="Email"
                type="text"
                className="w-80"
              />
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Etat</td>
            <td>
              <Select
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
        <ButtonContained>Enregistrer</ButtonContained>
      </div>
    </div>
  );
}