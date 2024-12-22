import { User, UserId } from '../domain/User';
import { UserRegistration } from '../domain/UserRegistration';

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUserById(id: UserId): Promise<User | null>;
  addUser(newUser: UserRegistration): Promise<User | null>;
}