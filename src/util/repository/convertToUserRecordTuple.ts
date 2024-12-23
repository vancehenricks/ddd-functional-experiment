import { Description, UserRegistration } from '../../domain/user';
import { UserRecordTuple } from '../../interfaces/repository';


export function convertToUserRecordTuple(user: UserRegistration) : UserRecordTuple {

  const description = 'This is a description' as Description;

  return [
    user.username,
    user.password,
    user.displayName,
    description,
    user.email,
  ];
}