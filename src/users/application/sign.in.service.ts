import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FindUserService } from './find.user.service';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenDto } from './dtos/access.token.dto';

@Injectable()
export class SignInService {
  constructor(
    private usersService: FindUserService,
    private jwtService: JwtService,
  ) {}

  async execute(username: string, pass: string): Promise<AccessTokenDto> {
    const user = await this.usersService.execute(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.userId, username: user.username };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
