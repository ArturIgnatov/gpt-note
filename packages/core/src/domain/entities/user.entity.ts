import { DateISO, UUID } from '../../shared';

export interface UserEntity {
  id: UUID;
  login: string;
  email: string;
  created_at: DateISO;
  updated_at: DateISO;
}
