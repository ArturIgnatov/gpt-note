import { action, computed, makeObservable, observable } from 'mobx';
import { INotificationService } from '../../../domain';
import { BaseModel } from '../../../shared';

interface ISelector {
  notification: INotificationService;
}

export class SignInModel extends BaseModel {
  public email = '';
  public password = '';

  constructor(
    public readonly props: object,
    public readonly selectors: ISelector,
  ) {
    super();
    makeObservable(this, {
      email: observable,
      password: observable,
      isDisabledSubmit: computed,
      setEmail: action,
      setPassword: action,
      onSubmit: action,
    });
  }

  // mount() {
  //
  // }
  // unmount() {
  //
  // }
  get isDisabledSubmit() {
    return !this.email.length || !this.password.length;
  }

  setEmail = (text: string) => {
    this.email = text;
  };

  setPassword = (text: string) => {
    this.password = text;
  };

  onSubmit = () => {
    this.selectors.notification.notify('SIGN IN SUCCESS', 'error');
  };
}
