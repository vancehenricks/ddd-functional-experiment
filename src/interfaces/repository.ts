import { UserId, Username, HashedPassword, DisplayName, Description, Email, UserRegistration } from '../domain/user';

export interface UserRecord {
  user_id: UserId;
  username: Username;
  password: HashedPassword;
  display_name: DisplayName;
  description: Description;
  email: Email;
}

export type UserRecordTuple = [
  UserRecord['username'],
  UserRecord['password'],
  UserRecord['display_name'],
  UserRecord['description'],
  UserRecord['email'],
];

export interface UserRepository {
  getUsers(): Promise<UserRecord[]>;
  getUserById(userId: UserId): Promise<UserRecord | null>;
  addUser(newUser: UserRegistration): Promise<UserRecord | null>;
}