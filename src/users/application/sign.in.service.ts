import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FindUserService } from './find.user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInService {
  constructor(
    private usersService: FindUserService,
    private jwtService: JwtService,
  ) {}

  async execute(username: string, pass: string): Promise<any> {
    const user = await this.usersService.execute(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
