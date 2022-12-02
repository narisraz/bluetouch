import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RiSearchLine, RiFilter3Line, RiAddBoxLine, RiStopLine, RiDeleteBin3Line, RiPlayLine } from "react-icons/ri";

import { ButtonContained } from "~/components/button-contained";
import { ButtonIcon } from "~/components/button-icon";
import { ButtonOutlined } from "~/components/button-outlined";
import { Chip } from "~/components/chip";
import { Link } from "~/components/link";
import { Table } from "~/components/table";
import { TableCell } from "~/components/table-cell";
import { TableColumnHead } from "~/components/table-column-head";
import { TableRow } from "~/components/table-row";
import { TableRowHead } from "~/components/table-row-head";
import type { Organisme } from "~/domain/entities/Organisme";
import { countOrganismes } from "~/modules/organisme/usecases/countOrganismes";
import { listOrganismes } from "~/modules/organisme/usecases/listOrganismes";

interface LoaderData {
  organismesCount: number,
  organismes: Organisme[]
}

export async function loader() {
  const organismesCount = await countOrganismes.execute();

  if (!organismesCount.isSuccess) {
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

export default function ListOrganismes() {
  const {organismesCount: count, organismes} = useLoaderData<LoaderData>()
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-semibold">Organismes</div>
          <input
            name="search"
            type="text"
            className="ml-2 w-96 rounded border py-2 px-3 focus:outline-primary/50"
            placeholder="Rechercher..."
          />
          <ButtonIcon className="ml-2">
            <RiSearchLine />
          </ButtonIcon>
        </div>
        <div className="flex">
          <ButtonOutlined className="mr-2">
            <RiFilter3Line className="mr-2" />
            Filtrer
          </ButtonOutlined>
          <Link href={"/admin/organismes/nouveau"}>
            <ButtonContained start={<RiAddBoxLine className="mr-2" />}>
              Nouveau
            </ButtonContained>
          </Link>
        </div>
      </div>
      <Table className="mt-4">
        <TableRowHead>
          <TableColumnHead>Nom</TableColumnHead>
          <TableColumnHead>Responsable</TableColumnHead>
          <TableColumnHead>Tél.</TableColumnHead>
          <TableColumnHead>Email</TableColumnHead>
          <TableColumnHead>Etat</TableColumnHead>
          <TableColumnHead className="w-10 text-right">Actions</TableColumnHead>
        </TableRowHead>
        <tbody>
          <>
            {organismes.map((value) => {
              <TableRow>
                <TableCell>{value.nom}</TableCell>
                <TableCell>{value.responsable}</TableCell>
                <TableCell>{value.tel}</TableCell>
                <TableCell>{value.email}</TableCell>
                <TableCell>
                  <Chip className="bg-success">Activé</Chip>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <ButtonIcon>
                      <RiStopLine />
                    </ButtonIcon>
                    <ButtonIcon>
                      <RiDeleteBin3Line />
                    </ButtonIcon>
                  </div>
                </TableCell>
              </TableRow>;
            })}
          </>
          
          <TableRow>
            <TableCell>Zara</TableCell>
            <TableCell>Naris</TableCell>
            <TableCell>032 63 498 64</TableCell>
            <TableCell>naris@/componentsgmail.com</TableCell>
            <TableCell>
              <Chip className="bg-success">Activé</Chip>
            </TableCell>
            <TableCell>
              <div className="flex">
                <ButtonIcon>
                  <RiStopLine />
                </ButtonIcon>
                <ButtonIcon>
                  <RiDeleteBin3Line />
                </ButtonIcon>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Zara</TableCell>
            <TableCell>Naris</TableCell>
            <TableCell>032 63 498 64</TableCell>
            <TableCell>naris@/componentsgmail.com</TableCell>
            <TableCell>
              <Chip className="bg-error">Suspendu</Chip>
            </TableCell>
            <TableCell>
              <div className="flex">
                <ButtonIcon>
                  <RiPlayLine />
                </ButtonIcon>
                <ButtonIcon>
                  <RiDeleteBin3Line />
                </ButtonIcon>
              </div>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
}