import { DateISO, UUID } from '../../shared';

export interface IMessageEntity {
  id: UUID;
  text: string;
  author: TAuthor;
  dialog_id: UUID;
  created_at: DateISO;
  updated_at: DateISO;
}

export type TAuthor = 'user' | 'assistant';
