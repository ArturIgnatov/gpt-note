import { compose } from '@app/core';
import { Dialog } from '@widgets/dialog';
import { DialogCard } from '@entities/dialog';
import { store } from '@shared/store';

const selectors = {
  dialogs: store.dialogs,
};

export const Dialogs = compose(selectors)(({ selectors }) => {
  return (
    <div className="flex h-full dark:bg-gray-900">
      <div
        role="list"
        className="flex flex-col h-full w-1/3 py-2 pr-2 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-w-2 scrolling-touch mx-auto  divide-y divide-gray-300 dark:divide-gray-700"
      >
        <DialogCard
          title="New dialog"
          description="Write your first request..."
          isCreate
          // isSelected
        />
        {selectors.dialogs.dialogsArr.map(dialog => (
          <DialogCard
            key={dialog.id}
            title={dialog.theme}
            description={dialog.last_message?.text ?? 'Empty message'}
          />
        ))}
      </div>
      <Dialog />
    </div>
  );
});
