import {
  RiAddBoxLine,
  RiDeleteBin3Line,
  RiFilter3Line,
  RiSearchLine,
  RiStopLine,
} from "react-icons/ri";
import ButtonContained from "../../../components/button-contained";
import ButtonOutlined from "../../../components/button-outlined";
import Chip from "../../../components/chip";
import Table from "../../../components/table";
import TableCell from "../../../components/table-cell";
import TableColumnHead from "../../../components/table-column-head";
import TableRow from "../../../components/table-row";
import TableRowHead from "../../../components/table-row-head";

export default function ListOrganismes() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-semibold">Organismes</div>
          <input
            name="search"
            type="text"
            className="w-96 py-2 px-2 ml-2 focus:outline-primary/50 border rounded bg-primary/5"
            placeholder="Rechercher..."
          />
          <ButtonOutlined className="ml-2">
            <RiSearchLine />
          </ButtonOutlined>
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
            <TableCell>naris@gmail.com</TableCell>
            <TableCell>
              <Chip className="bg-success">Activé</Chip>
            </TableCell>
            <TableCell>
              <div className="flex">
                <ButtonOutlined>
                  <RiStopLine />
                </ButtonOutlined>
                <ButtonOutlined>
                  <RiDeleteBin3Line />
                </ButtonOutlined>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Zara</TableCell>
            <TableCell>Naris</TableCell>
            <TableCell>032 63 498 64</TableCell>
            <TableCell>naris@gmail.com</TableCell>
            <TableCell>
              <Chip className="bg-error">Suspendu</Chip>
            </TableCell>
            <TableCell>
              <div className="flex">
                <ButtonOutlined>
                  <RiStopLine />
                </ButtonOutlined>
                <ButtonOutlined>
                  <RiDeleteBin3Line />
                </ButtonOutlined>
              </div>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
}
