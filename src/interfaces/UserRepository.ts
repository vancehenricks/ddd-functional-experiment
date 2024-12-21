import { User } from '../domain/User';
import { UserRegistration } from '../domain/UserRegistration';

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
  addUser(user: UserRegistration): Promise<User | null>;
}