import { UserRepository } from '../../interfaces/UserRepository';
import { addUser } from './addUser';
import { getUsers } from './getUserId';
import { getUserById } from './getUsers';

export const userRepository: UserRepository = {
  getUsers,
  getUserById,
  addUser,
};