import { makeAutoObservable } from 'mobx';
export class DialogsStore {
    constructor(mainStore) {
        Object.defineProperty(this, "mainStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: mainStore
        });
        Object.defineProperty(this, "dialogs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        if (this.mainStore) {
            //
        }
        makeAutoObservable(this);
    }
    setDialogs() {
        this.dialogs = [];
    }
}
