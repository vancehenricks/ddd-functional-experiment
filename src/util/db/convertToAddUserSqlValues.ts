import { UserRegistration } from '../../domain/user';


export function convertToAddUserSqlValues(user: UserRegistration) {

  const values = {
    username: user.username,
    password: user.password,
    displayName: user.displayName,
    description: 'This is my description.',
    email: user.email,
  };
    
  return [
    values.username,
    values.password,
    values.displayName,
    values.description,
    values.email,
  ];
}