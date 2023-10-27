import { memo } from 'react';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { Notification } from './notifications';
import { Profile } from './profile';

export const Header = memo(() => {
  return (
    <div className="flex rounded-2xl gap-6 flex-col items-center py-6 w-16 px-3 m-4 bg-gray-200 dark:bg-gray-800">
      <Logo />
      <Navigation />
      <div className="flex flex-col mt-auto gap-6">
        <Notification />
        <Profile />
      </div>
    </div>
  );
});
