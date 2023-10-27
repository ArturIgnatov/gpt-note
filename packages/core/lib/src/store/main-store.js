import { DialogsStore } from './dialogs-store';
import { makeAutoObservable } from 'mobx';
export class MainStore {
    constructor() {
        Object.defineProperty(this, "dialogsStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new DialogsStore(this)
        });
        makeAutoObservable(this);
    }
}
