import { ChatBubbleLeftEllipsisIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import { compose } from '@app/core';
import { classNames } from '@shared/lib';
import { store } from '@shared/store';
import { routes } from '../../lib';

const selectors = {
  navigation: store.navigation.main,
};

export const Navigation = compose(selectors)(({ selectors }) => {
  return (
    <div className="flex flex-col gap-4">
      {routes.map(item => (
        <button
          key={item.path}
          className={classNames(
            'flex items-center justify-center text-gray-400 h-9 w-9 bg-transparent rounded-full text-sm focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-300 hover:ring-offset-gray-800',
            selectors.navigation.page == item.path
              ? 'text-gray-700 dark:text-gray-100'
              : 'text-gray-500',
          )}
          onClick={() => selectors.navigation.navigate(item.path)}
        >
          {
            {
              dialogs: <ChatBubbleLeftEllipsisIcon className="block h-6 w-6" aria-hidden="true" />,
              notes: <PencilSquareIcon className="block h-6 w-6" aria-hidden="true" />,
            }[item.path]
          }
        </button>
      ))}
    </div>
  );
});
