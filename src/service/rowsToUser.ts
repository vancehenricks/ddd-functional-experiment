import { User } from '../interfaces/User';
import { getUserById } from '../model/users';

export async function rowsToUser(id: number) : Promise<User> {
  return (await getUserById(id)).rows[0];
}