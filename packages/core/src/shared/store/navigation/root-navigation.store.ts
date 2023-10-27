import { makeAutoObservable } from 'mobx';
import { TRootPages } from './types';

export class RootNavigationStore {
  public page: TRootPages = 'auth';

  constructor() {
    makeAutoObservable(this);
  }

  private navigate = (page: TRootPages) => {
    this.page = page;
  };

  public navigateToMain = () => {
    this.page = 'main';
  };

  public navigateToAuth = () => {
    this.page = 'auth';
  };
}
