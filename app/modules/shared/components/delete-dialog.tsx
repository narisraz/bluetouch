
import { RiErrorWarningLine } from "react-icons/ri";

import { Dialog } from "./dialog";
import type { Props } from "./props";

interface DeleteDialogProps extends Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  deleteAction: string
}

export function DeleteDialog({isOpen, setIsOpen, deleteAction}: DeleteDialogProps) {
  return <Dialog action={deleteAction} confirmButtonLabel="Oui, je confirme" isOpen={isOpen} setIsOpen={setIsOpen}>
    <div className="flex items-center gap-2 px-4">
      <RiErrorWarningLine />
      Souhaitez-vous vraiment supprimer cet élément ?
    </div>
  </Dialog>
}