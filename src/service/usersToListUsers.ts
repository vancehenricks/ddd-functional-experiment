import { getUsers } from '../model/users';

export type ListUsers = string[];

export async function usersToListUsers() : Promise<ListUsers> {
  return (await getUsers()).rows;
}