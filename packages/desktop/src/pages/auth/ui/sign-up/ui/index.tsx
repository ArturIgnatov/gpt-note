import { compose, SignUpModel } from '@app/core';
import { NotificationService } from '@shared/lib';
import { Button, Input } from '@shared/ui';

interface IProps {
  goToSignIn: () => void;
}

const selectors = {
  notification: NotificationService,
};

export const SignUp = compose(
  SignUpModel,
  selectors,
)<IProps>(({ model, props }) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-8" action="#" onSubmit={() => ''}>
        <div>
          <div className="mb-2">
            <Input
              label="Nickname"
              value={model.nickname}
              type="email"
              onChangeText={model.setNickName}
            />
          </div>
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
            <Button text="Sign Up" disabled={model.isDisabledSubmit} onClick={model.onSubmit} />
          </div>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        You already have an account ?{' '}
        <a
          onClick={props.goToSignIn}
          className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          SignIn
        </a>
      </p>
    </div>
  );
});
