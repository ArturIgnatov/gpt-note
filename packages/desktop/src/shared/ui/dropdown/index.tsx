import { Menu, Transition } from '@headlessui/react';
import { FC, Fragment, memo } from 'react';
import { classNames } from '@shared/lib';

interface IProps {
  buttons: Array<{ text: string; onClick: () => void }>;
  className?: string;
}

export const DropdownMenu: FC<IProps> = memo(({ buttons, className }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className={`absolute mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-opacity-10 focus:outline-none ${className}`}
      >
        {buttons.map(el => (
          <Menu.Item key={el.text}>
            {({ active }) => (
              <button
                className={classNames(
                  active ? 'bg-gray-200 dark:bg-gray-700' : '',
                  'w-full block px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200',
                )}
                onClick={el.onClick}
              >
                {el.text}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  );
});
