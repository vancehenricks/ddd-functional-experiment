import { EncryptedUser } from '../../interfaces/api';
import { UserRepository } from '../../interfaces/repository';
import { convertToUser } from '../../util/repository/convertToUser';
import { convertToEncryptedUser } from '../../util/user/convertToEncryptedUser';

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