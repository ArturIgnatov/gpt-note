import { memo } from 'react';
import { LogoSvg } from '@shared/ui';

export const Logo = memo(() => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <div className="w-14 h-14">
        <LogoSvg />
      </div>
      {/*<img className="block h-8 w-auto lg:hidden" src={logo} alt="Your Company" />*/}
      {/*<img className="hidden h-8 w-auto lg:block" src={logo} alt="Your Company" />*/}
    </div>
  );
});
