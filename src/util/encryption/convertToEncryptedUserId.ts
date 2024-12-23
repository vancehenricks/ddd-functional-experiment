import { UserId } from '../../domain/user';
import { EncryptedUserId } from '../../interfaces/api';
import { obfuscate } from './obfuscate';

export async function convertToEncryptedUserId(userId: UserId): Promise<EncryptedUserId> {

  const encryptedUserId = await obfuscate(userId.toString());
  return encryptedUserId as EncryptedUserId;
}