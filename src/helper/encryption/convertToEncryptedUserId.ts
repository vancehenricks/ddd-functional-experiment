import { UserId } from '../../domain/User';
import { EncryptedUserId } from '../../interfaces/api/EncryptedUserId';
import { obfuscate } from './obfuscate';

export async function convertToEncryptedUserId(userId: UserId): Promise<EncryptedUserId> {

  const encryptedUserId = await obfuscate(userId.toString());
  return encryptedUserId as EncryptedUserId;
}