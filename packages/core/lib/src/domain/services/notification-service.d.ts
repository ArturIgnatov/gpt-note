type NotificationKey = string;
export interface INotificationService {
    notify: (message: string, type?: 'error' | 'warning' | 'info') => NotificationKey;
    removeNotify: (key: NotificationKey) => void;
}
export {};
//# sourceMappingURL=notification-service.d.ts.map