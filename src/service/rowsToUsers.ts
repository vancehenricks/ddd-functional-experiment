import { User } from '../interfaces/User';
import { getUsers } from '../model/users';

export async function rowsToUsers() : Promise<Array<User>> {
  return (await getUsers()).rows;
}