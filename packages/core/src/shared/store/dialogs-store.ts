import { makeAutoObservable } from 'mobx';
import { MainStore } from './main-store';
import { IDialogEntity, TDialogID } from '../../domain/entities/dialog.entity';

const dialogs: IDialogEntity[] = [
  {
    id: '1',
    theme: 'Gpt in worlds',
    last_message: {
      id: '1',
      text: 'Hello GPT in world is common features',
    },
  },
  {
    id: '2',
    theme: 'Postgres',
    last_message: {
      id: '1',
      text: 'Postgres is db',
    },
  },
  {
    id: '4',
    theme: 'Happy birthday Michail',
    last_message: {
      id: '1',
      text: 'In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful',
    },
  },
  {
    id: '5',
    theme: 'Happy birthday Michail',
    last_message: {
      id: '1',
      text: 'In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful',
    },
  },
  {
    id: '6',
    theme: 'Happy birthday Michail',
    last_message: {
      id: '1',
      text: 'In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful',
    },
  },
  {
    id: '7',
    theme: 'Happy birthday Michail',
    last_message: {
      id: '1',
      text: 'In publishing and graphic design, Lorem ipsum  is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful',
    },
  },
];

export class DialogsStore {
  public dialogs = new Map<TDialogID, IDialogEntity>();
  public isLoading = false;
  public permissionVisible = false;

  constructor(private readonly mainStore: MainStore) {
    if (this.mainStore) {
      //
    }

    this.setDialogs(dialogs);
    makeAutoObservable(this);
  }

  get dialogsArr() {
    return Array.from(this.dialogs.values());
  }

  public mapTo(dialogs: IDialogEntity[]): Map<TDialogID, IDialogEntity> {
    const reduced = dialogs.reduce<[[TDialogID, IDialogEntity]]>(
      (acc, item) => {
        acc.push([item.id, item]);
        return acc;
      },
      [] as unknown as [[TDialogID, IDialogEntity]],
    );

    return new Map([...reduced]);
  }

  public setDialogs(dialogs: IDialogEntity[]) {
    this.dialogs = this.mapTo(dialogs);
  }

  public setDialog(dialog: IDialogEntity) {
    this.dialogs.set(dialog.id, dialog);
  }

  public updateDialog(id: TDialogID, data: Partial<IDialogEntity>) {
    const dialog = this.dialogs.get(id);

    if (dialog) {
      Object.assign(dialog, data);
    }
  }

  public removeDialog(id: TDialogID) {
    this.dialogs.delete(id);
  }

  private togglePermissionVisible() {
    this.permissionVisible = !this.permissionVisible;
  }

  private openPermission() {
    this.permissionVisible = true;
  }

  private closePermission() {
    this.permissionVisible = false;
  }
}
