import { User } from '../../domain/User';
import { EncryptedUserId } from './EncryptedUserId';

export interface EncryptedUser extends Omit<User, 'userId'> { 
  userId: EncryptedUserId;
}