import { useEffect, useState } from "react";

import { useFetcher, useNavigate } from "@remix-run/react";

import { ButtonContained } from "./button-contained";
import { ButtonOutlined } from "./button-outlined";
import { Modal } from "./modal";
import type { Props } from "./props";

interface DeleteDialogProps extends Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  confirmButtonLabel: string 
  action: string
}

export function Dialog({isOpen, setIsOpen, children, confirmButtonLabel, action}: DeleteDialogProps) {
  const fetcher = useFetcher()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  function closeDialog() {
    setIsOpen(false)
  }

  function executeAction() {
    setIsLoading(true)
    fetcher.load(action)
  }

  useEffect(() => {
    if (fetcher.type === "done") {
      setIsOpen(false)
      setIsLoading(false)
      navigate('.', {replace: true})
    }
  }, [fetcher, navigate, setIsOpen])
  
  return <Modal title="Suppression" isOpen={isOpen} setIsOpen={setIsOpen} >
    {children}
    <div className="mt-4 flex justify-center gap-2 bg-background py-4">
      <ButtonOutlined onclick={closeDialog}>Annuler</ButtonOutlined>
      <ButtonContained onclick={executeAction} loading={isLoading}>{confirmButtonLabel}</ButtonContained>
    </div>
  </Modal>
}