import { UserId } from '../../domain/User';
import { UserRegistration } from '../../domain/UserRegistration';
import { UserRecord } from './UserRecord';

export interface UserRepository {
  getUsers(): Promise<UserRecord[]>;
  getUserById(userId: UserId): Promise<UserRecord | null>;
  addUser(newUser: UserRegistration): Promise<UserRecord | null>;
}