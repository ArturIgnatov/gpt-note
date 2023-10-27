import { RootNavigationStore } from './root-navigation.store';
import { AuthNavigationStore } from './auth-navigation.store';
import { MainNavigationStore } from './main-navigation.store';

export class NavigationStore {
  public readonly root = new RootNavigationStore();
  public readonly auth = new AuthNavigationStore();
  public readonly main = new MainNavigationStore();
}
