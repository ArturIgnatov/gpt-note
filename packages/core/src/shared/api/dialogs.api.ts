import { Api } from './api';

export class DialogsApi {
  constructor(private readonly root: Api) {}

  public all() {
    return this.root.instance.get('/dialogs');
  }

  public one(id: string) {
    return this.root.instance.get(`/dialogs/${id}`);
  }

  public create() {
    return this.root.instance.post('/dialogs');
  }

  public delete(id: string) {
    return this.root.instance.delete(`/dialogs/${id}`);
  }
}
