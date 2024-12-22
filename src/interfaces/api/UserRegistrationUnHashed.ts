import { User } from '../../domain/User';
import { Brand } from '../Brand';

export type UnHashedPassword = Brand<string, 'UnHashedPassword'>; 

export interface UserRegistrationUnHashed extends Omit<User, 'userId' | 'description'> {
  password: UnHashedPassword;
}