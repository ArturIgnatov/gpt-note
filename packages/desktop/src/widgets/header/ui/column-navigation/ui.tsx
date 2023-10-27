import { Disclosure } from '@headlessui/react';
import { compose } from '@app/core';
import { classNames } from '@shared/lib';
import { store } from '@shared/store';
import { routes } from '../../lib';

const selectors = {
  navigation: store.navigation.main,
};

export const ColumnNavigation = compose(selectors)(({ selectors }) => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {routes.map(item => (
          <Disclosure.Button
            key={item.name}
            as="button"
            className={classNames(
              selectors.navigation.page === item.path
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'w-full block rounded-md px-3 py-2 text-base font-medium',
            )}
            aria-current={selectors.navigation.page === item.path ? 'page' : undefined}
            onClick={() => selectors.navigation.navigate(item.path)}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
});
