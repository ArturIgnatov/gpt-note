import { Menu } from '@headlessui/react';
import { DropdownMenu } from '@shared/ui/dropdown';

export const Profile = () => {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>
      <DropdownMenu
        className="-right-44 -top-24"
        buttons={[
          { text: 'Profile', onClick: () => '' },
          { text: 'Settings', onClick: () => '' },
        ]}
      />
    </Menu>
  );
};
