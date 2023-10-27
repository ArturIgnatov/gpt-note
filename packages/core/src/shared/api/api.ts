import axios, { AxiosInstance } from 'axios';
import { AuthApi } from './auth.api';
import { DialogsApi } from './dialogs.api';

export interface ITokenPack {
  access_token: string;
  refresh_token: string;
}

export class Api {
  public readonly instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8081',
  });
  public auth = new AuthApi(this);
  public dialogs = new DialogsApi(this);

  private setTokens(tokens: ITokenPack) {
    localStorage.setItem('@tokens', JSON.stringify(tokens));
  }

  private getTokens() {
    const data = localStorage.getItem('@tokens');

    if (data) {
      return JSON.parse(data) as ITokenPack;
    }

    return null;
  }
}
