export interface INotificationService {
  notify: (message: string, variant?: 'error' | 'warning' | 'default') => TNotificationKey;
  removeNotify: (key: TNotificationKey) => void;
}

export type TNotificationKey = string | number;
