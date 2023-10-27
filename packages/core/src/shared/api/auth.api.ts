import { Api } from './api';

export class AuthApi {
  constructor(private readonly root: Api) {}

  public signIn() {
    return this.root.instance.post('/auth/sign-in', {});
  }

  public signUp() {
    return this.root.instance.post('/auth/sign-in', {});
  }

  public update() {
    return this.root.instance.post('/auth/update', {});
  }
}
