import { PlusIcon } from '@heroicons/react/20/solid';
import { FC, memo } from 'react';

interface IProps {
  title: string;
  description?: string;
  isSelected?: boolean;
  isCreate?: boolean;
}

export const DialogCard: FC<IProps> = memo(({ title, description, isCreate, isSelected }) => {
  return (
    <button
      className={`
      flex
      p-4
      justify-between
      py-5
      transition-all
      ${isSelected ? 'bg-gray-200 dark:bg-gray-800' : 'bg-transparent'}
      hover:dark:bg-gray-800
      hover:bg-gray-100
      min-w-min
    `}
    >
      <div className="flex gap-x-4">
        {isCreate ? (
          <div className="flex justify-center items-center h-12 w-12 flex-none rounded-full bg-gray-300 dark:bg-gray-700">
            <PlusIcon className="block h-8 w-8 text-gray-600 dark:text-white" aria-hidden="true" />
          </div>
        ) : (
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png"
            alt=""
          />
        )}
        <div className="w-auto text-left">
          <p className="text-sm font-semibold line-clamp-1 leading-6 text-gray-900 dark:text-white">
            {title}
          </p>
          <p className="mt-1 text-xs leading-5 line-clamp-1 text-gray-500">{description}</p>
        </div>
      </div>
    </button>
  );
});
