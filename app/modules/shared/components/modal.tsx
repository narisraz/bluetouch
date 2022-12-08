import { Fragment, useState } from 'react';

import { Dialog, Transition } from "@headlessui/react";

import type { Props } from './props';

interface ModalProps extends Props {
  title: string,
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
}

export function Modal({children, title, isOpen, setIsOpen}: ModalProps) {

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
        <div className="flex min-h-full items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className={`w-full max-w-md overflow-hidden rounded bg-white shadow-xl transition-all`}>
              <Dialog.Title
                as="h3"
                className="flex items-center p-4 font-bold"
              >
                {title}
              </Dialog.Title>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
}