import ButtonContained from "@/components/button-contained";
import ButtonIcon from "@/components/button-icon";
import ButtonOutlined from "@/components/button-outlined";
import Chip from "@/components/chip";
import Table from "@/components/table";
import TableCell from "@/components/table-cell";
import TableColumnHead from "@/components/table-column-head";
import TableRow from "@/components/table-row";
import TableRowHead from "@/components/table-row-head";
import {
  RiAddBoxLine,
  RiDeleteBin3Line,
  RiFilter3Line,
  RiPlayLine,
  RiSearchLine,
  RiStopLine,
} from "react-icons/ri";

export default function ListOrganismes() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-semibold">Organismes</div>
          <input
            name="search"
            type="text"
            className="w-96 py-2 px-3 ml-2 focus:outline-primary/50 border rounded"
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
          <ButtonContained>
            <RiAddBoxLine className="mr-2" />
            Nouveau
          </ButtonContained>
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
