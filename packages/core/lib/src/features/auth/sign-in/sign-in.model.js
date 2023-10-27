import { makeAutoObservable } from 'mobx';
export class SignInModel {
    constructor(props, selector) {
        Object.defineProperty(this, "props", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: props
        });
        Object.defineProperty(this, "selector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: selector
        });
        Object.defineProperty(this, "email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "setEmail", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (text) => {
                this.email = text;
            }
        });
        Object.defineProperty(this, "setPassword", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (text) => {
                this.password = text;
            }
        });
        Object.defineProperty(this, "onSubmit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.selector.notification.notify('HELLO');
            }
        });
        makeAutoObservable(this);
    }
}
