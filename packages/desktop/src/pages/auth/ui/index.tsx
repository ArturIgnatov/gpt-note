import { compose } from '@app/core';
import { store } from '@shared/store';
import { LogoSvg } from '@shared/ui';
import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

const selectors = {
  navigation: store.navigation.auth,
};

export const AuthPage = compose(selectors)(({ selectors }) => {
  return (
    <div className="flex min-h-full flex-1 dark:bg-gray-900 bg-white flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mx-auto w-1/5">
          <LogoSvg />
        </div>
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight dark:text-gray-100 text-gray-900">
          {{ signIn: 'Sign In', signUp: 'Sign Up' }[selectors.navigation.page]}
        </h2>
      </div>
      {
        {
          signIn: <SignIn goToSignUp={selectors.navigation.navigateToSignUp} />,
          signUp: <SignUp goToSignIn={selectors.navigation.navigateToSignIn} />,
        }[selectors.navigation.page]
      }
    </div>
  );
});
