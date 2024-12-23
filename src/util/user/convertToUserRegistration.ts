
import { UserRegistration } from '../../domain/user';
import { UserRegistrationUnHashed } from '../../interfaces/api';
import { convertToHashPassword } from '../encryption/convertToHashPassword';

export async function convertToUserRegistration(userRegistrationUnHashed: UserRegistrationUnHashed) {
  const hashedPassword = await convertToHashPassword(userRegistrationUnHashed.password);

  const userWithHashedPassword: UserRegistration = {
    ...userRegistrationUnHashed,
    password: hashedPassword,
  };

  return userWithHashedPassword;
}