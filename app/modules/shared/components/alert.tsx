import { Fragment, useState } from 'react';

import { Dialog, Transition } from "@headlessui/react";
import { RiCheckboxCircleLine, RiCloseLine } from 'react-icons/ri';

import type { Props } from './props';

interface AlertProps extends Props {
  type?: "success" | "info" | "error"
}

export function Alert({children, type}: AlertProps) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }



  return <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/25" />
      </Transition.Child>

      <div className="fixed inset-0 bottom-4 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md overflow-hidden rounded bg-success py-2 px-3 shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-base tracking-wide">
                  <RiCheckboxCircleLine />
                  {children}
                </div>
                <RiCloseLine className="h-6 w-6 rounded text-black/70 duration-200 hover:cursor-pointer hover:bg-white/25" onClick={closeModal} />
              </Dialog.Title>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
}