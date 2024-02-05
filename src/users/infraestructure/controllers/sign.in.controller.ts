import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { SignInService } from '../../application/sign.in.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SUCCESSFUL_RESPONSE } from '../../../shared/infraestructure/constants/constants';
import { LoginDto } from '../../application/dtos/login.dto';
import { AccessTokenDto } from '../../application/dtos/access.token.dto';

@Controller('auth')
@ApiTags('Auth')
export class SignInController {
  constructor(private signInService: SignInService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.CREATED,
    type: AccessTokenDto,
  })
  signIn(@Body() signInDto: LoginDto): Promise<AccessTokenDto> {
    return this.signInService.execute(signInDto.username, signInDto.password);
  }
}
