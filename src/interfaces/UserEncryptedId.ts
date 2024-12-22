import { User } from '../domain/User';
import { EncryptedUserId } from './EncryptedUserId';

export interface UserEncryptedId extends Omit<User, 'user_id'> { 
  user_id: EncryptedUserId;
}