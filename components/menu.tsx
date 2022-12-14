import { RiDashboardLine, RiOrganizationChart } from "react-icons/ri";
import MenuItem from "./menu-item";

export default function Menu() {
  return (
    <ul className="my-2">
      <MenuItem label="Tableau de bord" icon={<RiDashboardLine />} />
      <MenuItem
        label="Organismes"
        icon={<RiOrganizationChart />}
        selected={true}
      />
    </ul>
  );
}
