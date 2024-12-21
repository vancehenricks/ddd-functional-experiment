import { User } from '../domain/User';

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
}