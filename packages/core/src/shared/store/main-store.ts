import { DialogsStore } from './dialogs-store';
import { NavigationStore } from './navigation/navigation-store';
import { makeAutoObservable } from 'mobx';

export class MainStore {
  public dialogs = new DialogsStore(this);
  public navigation = new NavigationStore();

  constructor() {
    makeAutoObservable(this);
  }
}
