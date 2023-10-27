import { makeAutoObservable } from 'mobx';
import { TAuthPages } from './types';

export class AuthNavigationStore {
  public page: TAuthPages = 'signIn';

  constructor() {
    makeAutoObservable(this);
  }

  private navigate = (page: TAuthPages) => {
    this.page = page;
  };

  public navigateToSignIn = () => {
    this.page = 'signIn';
  };

  public navigateToSignUp = () => {
    this.page = 'signUp';
  };
}
