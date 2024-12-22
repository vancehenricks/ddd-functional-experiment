import { UserRepository } from '../../interfaces/db/UserRepository';
import { UserRegistrationUnHashed } from '../../interfaces/api/UserRegistrationUnHashed';
import { EncryptedUser } from '../../interfaces/api/EncryptedUser';
import { convertToEncryptedUser } from '../../helper/user/convertToEncryptedUser';
import { convertToUserRegistration } from '../../helper/user/convertToUserRegistration';
import { convertToUser } from '../../helper/db/convertToUser';


export async function addUser(userRepository: UserRepository, newUser: UserRegistrationUnHashed): Promise<EncryptedUser | null> {

  const userRegistration = await convertToUserRegistration(newUser);
  const userRecord = await userRepository.addUser(userRegistration);

  if (!userRecord) {
    return null;
  }

  const user = convertToUser(userRecord);
  
  return convertToEncryptedUser(user);
}