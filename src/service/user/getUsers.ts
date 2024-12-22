import { convertToUser } from '../../helper/db/convertToUser';
import { convertToEncryptedUser } from '../../helper/user/convertToEncryptedUser';
import { EncryptedUser } from '../../interfaces/api/EncryptedUser';
import { UserRepository } from '../../interfaces/db/UserRepository';

export async function getUsers(userRepository: UserRepository) : Promise<Array<EncryptedUser>> {

  const userRecords = await userRepository.getUsers();

  if (!userRecords) {
    return [];
  }

  const userEncryptedIds = await Promise.all(
    userRecords.map(async (userRecord) => {
      const user = convertToUser(userRecord);
      return convertToEncryptedUser(user);
    }),
  );

  return userEncryptedIds;
}