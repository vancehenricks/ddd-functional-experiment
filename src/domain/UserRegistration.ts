import { Brand } from '../interfaces/Brand';
import { User } from './User';

export type HashedPassword = Brand<string, 'HashedPassword'>;

export interface UserRegistration extends Omit<User, 'userId' | 'description'> {
  password: HashedPassword;
}