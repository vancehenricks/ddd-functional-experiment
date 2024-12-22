import bcrypt from 'bcrypt';
import { HashedPassword } from '../../domain/UserRegistration';
import { UnHashedPassword } from '../../interfaces/api/UserRegistrationUnHashed';

const SALT_ROUNDS = 10;

export async function convertToHashPassword(password: UnHashedPassword): Promise<HashedPassword> { 
  return await bcrypt.hash(password, SALT_ROUNDS) as HashedPassword;
}