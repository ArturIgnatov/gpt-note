import { compose, SignInModel } from '@app/core';
import { NotificationService } from '@shared/lib';
import { Input, Button } from '@shared/ui';
interface IProps {
  goToSignUp: () => void;
}

const selectors = {
  notification: NotificationService,
};

export const SignIn = compose(
  SignInModel,
  selectors,
)<IProps>(({ model, props }) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-8" action="#" onSubmit={() => ''}>
        <div>
          <div className="mb-2">
            <Input label="Email" value={model.email} type="email" onChangeText={model.setEmail} />
          </div>
          <Input
            label="Password"
            type="password"
            value={model.password}
            onChangeText={model.setPassword}
          />
          <div className="mt-5">
            <Button text="Sign In" disabled={model.isDisabledSubmit} onClick={model.onSubmit} />
          </div>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Not sign in ?{' '}
        <a
          onClick={props.goToSignUp}
          className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          SignUp
        </a>
      </p>
    </div>
  );
});
