import { makeAutoObservable } from 'mobx';
import { TMainPages } from './types';

export class MainNavigationStore {
  public page: TMainPages = 'dialogs';

  constructor() {
    makeAutoObservable(this);
  }

  public navigate = (page: TMainPages) => {
    this.page = page;
  };

  public navigateToDialogs = () => {
    this.page = 'dialogs';
  };

  public navigateToNotes = () => {
    this.page = 'notes';
  };
}
