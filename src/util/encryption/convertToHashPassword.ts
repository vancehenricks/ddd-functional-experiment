import bcrypt from 'bcrypt';
import { HashedPassword } from '../../domain/user';
import { UnHashedPassword } from '../../interfaces/api';


const SALT_ROUNDS = 10;

export async function convertToHashPassword(unHashedPassword: UnHashedPassword): Promise<HashedPassword> { 
  return await bcrypt.hash(unHashedPassword, SALT_ROUNDS) as HashedPassword;
}