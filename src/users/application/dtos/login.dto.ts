export class LoginDto {
  // @example 'maria'
  username: string;
  // @example 'guess'
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
