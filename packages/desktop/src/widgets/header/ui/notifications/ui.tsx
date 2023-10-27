import { BellIcon } from '@heroicons/react/20/solid';
import { memo } from 'react';

export const Notification = memo(() => {
  return (
    <button
      type="button"
      className="rounded-full p-1 text-gray-400 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
});
