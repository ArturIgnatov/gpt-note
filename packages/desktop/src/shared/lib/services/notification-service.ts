import { enqueueSnackbar, closeSnackbar } from 'notistack';
import { INotificationService, TNotificationKey } from '@app/core';

export const NotificationService = new (class implements INotificationService {
  notify(message: string, variant: 'error' | 'warning' | 'default' | undefined): TNotificationKey {
    return enqueueSnackbar({
      message,
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
    });
  }

  removeNotify(key: TNotificationKey): void {
    closeSnackbar(key);
  }
})();
