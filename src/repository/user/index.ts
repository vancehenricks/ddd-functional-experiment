import { UserRepository } from '../../interfaces/db/UserRepository';
import { addUser } from './addUser';
import { getUserById } from './getUserById';
import { getUsers } from './getUsers';

export const userRepository: UserRepository = {
  getUsers,
  getUserById,
  addUser,
};