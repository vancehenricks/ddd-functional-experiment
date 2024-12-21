import { User } from './User';

export interface UserRegistration extends Omit<User, 'user_id' | 'description'> {
  password: string;
}