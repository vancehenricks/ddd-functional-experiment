import { UserId } from '../../domain/user';
import { EncryptedUserId } from '../../interfaces/api';
import { obfuscate } from './obfuscate';

export async function convertToEncryptedUserId(userId: UserId): Promise<EncryptedUserId> {

  const encryptedUserId = await obfuscate(userId.toString());

  if (!encryptedUserId) {
    throw new Error('Error converting UserId to EncryptedUserId');
  }

  return encryptedUserId as EncryptedUserId;
}