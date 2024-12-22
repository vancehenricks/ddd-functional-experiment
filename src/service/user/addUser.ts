import { UserRegistration } from '../../domain/UserRegistration';
import { UserRepository } from '../../interfaces/UserRepository';
import { User } from '../../domain/User';
import { UserRegistrationUnHashed } from '../../interfaces/UserRegistrationUnHashed';
import { convertToHashPassword } from '../../helper/hashedPassword/convertToHashPassword';


export async function addUser(userRepository: UserRepository, newUser: UserRegistrationUnHashed): Promise<User | null> {
  const hashedPassword = await convertToHashPassword(newUser.password);

  const userWithHashedPassword: UserRegistration = {
    ...newUser,
    password: hashedPassword,
  };


  //todo encrypt id when there is something returned here
  return userRepository.addUser(userWithHashedPassword);
}