import { IMessageEntity } from './message.entity';
import { DateISO, UUID } from '../../shared';

export interface IDialogEntity {
  id: UUID;
  theme: string;
  created_user_id: UUID;
  created_at: DateISO;
  updated_at: DateISO;
  last_message: IMessageEntity | null;
}
