import { Brand } from '../interfaces/util';

export type UserId = Brand<number, 'UserId'>;
export type Username = Brand<string, 'Username'>;
export type Email = Brand<string, 'Email'>;
export type DisplayName = Brand<string, 'DisplayName'>;
export type Description = Brand<string, 'Description'>;


export interface User {
  userId: UserId;
  username: Username;
  displayName: DisplayName;
  description: Description;
  email: Email;
}

export type HashedPassword = Brand<string, 'HashedPassword'>;

export interface UserRegistration extends Omit<User, 'userId' | 'description'> {
  password: HashedPassword;
}