import { Brand } from '../interfaces/Brand';

export type UserId = Brand<string, 'UserId'>;
export type Username = Brand<string, 'Username'>;
export type Email = Brand<string, 'Email'>;
export type DisplayName = Brand<string, 'DisplayName'>;
export type Description = Brand<string, 'Description'>;


export interface User {
  user_id: UserId;
  username: Username;
  display_name: DisplayName;
  description: Description;
  email: Email;
}