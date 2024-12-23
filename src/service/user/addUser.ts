
import { convertToEncryptedUser } from '../../util/user/convertToEncryptedUser';
import { convertToUserRegistration } from '../../util/user/convertToUserRegistration';
import { convertToUser } from '../../util/repository/convertToUser';
import { UserRegistrationUnHashed, EncryptedUser } from '../../interfaces/api';
import { UserRepository } from '../../interfaces/repository';


export async function addUser(userRepository: UserRepository, newUser: UserRegistrationUnHashed): Promise<EncryptedUser | null> {

  const userRegistration = await convertToUserRegistration(newUser);
  const userRecord = await userRepository.addUser(userRegistration);

  if (!userRecord) {
    return null;
  }

  const user = convertToUser(userRecord);
  
  return convertToEncryptedUser(user);
}