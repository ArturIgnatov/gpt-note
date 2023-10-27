import { action, computed, makeObservable, observable } from 'mobx';
import { INotificationService } from '../../../domain';
import { BaseModel } from '../../../shared';

interface ISelector {
  notification: INotificationService;
}

export class SignUpModel extends BaseModel {
  public email = '';
  public password = '';
  public nickname = '';

  constructor(
    private readonly props: object,
    private readonly selector: ISelector,
  ) {
    super();
    makeObservable(this, {
      email: observable,
      password: observable,
      nickname: observable,
      isDisabledSubmit: computed,
      setNickName: action,
      setEmail: action,
      setPassword: action,
      onSubmit: action,
    });
  }

  mount() {
    console.log('MOUNT');
  }

  unmount() {
    console.log('UNMOUNT');
  }

  get isDisabledSubmit() {
    return !this.email.length || !this.password.length || !this.nickname.length;
  }

  setNickName = (text: string) => {
    this.nickname = text;
  };

  setEmail = (text: string) => {
    this.email = text;
  };

  setPassword = (text: string) => {
    this.password = text;
  };

  onSubmit = () => {
    this.selector.notification.notify('SIGN UP SUCCESS', 'warning');
  };
}
