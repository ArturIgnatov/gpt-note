import { makeAutoObservable } from 'mobx';
export class AuthMainModel {
    constructor() {
        Object.defineProperty(this, "page", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'signIn'
        });
        Object.defineProperty(this, "setPage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (page) => {
                this.page = page;
            }
        });
        Object.defineProperty(this, "goToSignIn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.page = 'signIn';
            }
        });
        Object.defineProperty(this, "goToSignUp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.page = 'signUp';
            }
        });
        makeAutoObservable(this);
    }
}
