import { User } from '../domain/user';
import { Brand } from './util';

export interface EncryptedUser extends Omit<User, 'userId'> { 
  userId: EncryptedUserId;
}

export type EncryptedUserId = Brand<string, 'EncryptedUserId'>;

export interface GetUserQueryParam {
  id: EncryptedUserId;
}

export type UnHashedPassword = Brand<string, 'UnHashedPassword'>; 

export interface UserRegistrationUnHashed extends Omit<User, 'userId' | 'description'> {
  password: UnHashedPassword;
}