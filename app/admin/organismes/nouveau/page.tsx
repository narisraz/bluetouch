"use client";

import ButtonContained from "@/components/button-contained";
import ButtonOutlined from "@/components/button-outlined";
import Input from "@/components/input";
import Select, { Option } from "@/components/select";
import Etat from "@/domain/entities/Etat";
import Link from "next/link";
import { useState } from "react";

export default function Nouveau() {
  const options: Option[] = Object.values(Etat).map((etat, index, etats) => ({
    key: index.toString(),
    label: etats[index],
    value: index.toString(),
  }));
  const [selectedEtat, setSelectedEtat] = useState("0");
  return (
    <div className="flex-1 p-4 bg-surface rounded">
      <div className="border-b pb-4">
        <div className="text-xl font-semibold">Nouvel organisme</div>
        <div>
          Veuillez saisir les informations concernant le nouvel organisme
        </div>
      </div>

      <table className="mt-3 table-auto border-spacing-2 border-separate">
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
