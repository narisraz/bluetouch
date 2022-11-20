import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiArrowDownSFill, RiCheckboxCircleFill } from "react-icons/ri";

export interface Option {
  key: string;
  value: string;
  label: string;
}

interface SelectProps {
  selected: string;
  options: Option[];
  onChange: (value: string) => void;
}

export default function Select({ selected, options, onChange }: SelectProps) {
  return (
    <div className="relative ml-2">
      <Listbox value={selected} onChange={onChange}>
        <Listbox.Button
          className={`w-80 border py-2 px-3 focus:outline-primary/50 rounded text-left`}
        >
          <span className="block truncate">
            {options.find((option) => option.key === selected)?.label}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <RiArrowDownSFill className="text-gray-400" />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`absolute mt-1 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
          >
            {options.map((option) => (
              <Listbox.Option
                key={option.key}
                value={option.value}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 pl-10 text-black ${
                    active ? "bg-primary text-white " : ""
                  }`
                }
              >
                {({ active, selected }) => (
                  <div className="flex gap-2 items-center">
                    {selected && (
                      <RiCheckboxCircleFill
                        className={`absolute left-0 ml-3 ${
                          active ? "text-white" : "text-primary"
                        }`}
                      />
                    )}
                    {option.label}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
