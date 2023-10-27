import { makeAutoObservable } from 'mobx';
export class SignUpModel {
    constructor() {
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
        Object.defineProperty(this, "nickname", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "setNickName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (text) => {
                this.nickname = text;
            }
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
        makeAutoObservable(this);
    }
}
