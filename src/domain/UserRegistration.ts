import { Brand } from '../interfaces/Brand';
import { User } from './User';

export type HashedPassword = Brand<string, 'HashedPassword'>;

export interface UserRegistration extends Omit<User, 'user_id' | 'description'> {
  password: HashedPassword;
}