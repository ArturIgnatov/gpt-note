import { compose } from '@app/core';
import { Header } from '@widgets/header';
import { store } from '@shared/store';
import { Dialogs } from './dialogs';
import { Notes } from './notes';

const selectors = {
  navigation: store.navigation.main,
};

export const MainPage = compose(selectors)(({ selectors }) => {
  return (
    <div className="flex  w-full h-full dark:bg-gray-900">
      <Header />
      {selectors.navigation.page === 'dialogs' ? <Dialogs /> : <Notes />}
    </div>
  );
});
