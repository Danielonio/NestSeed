import {
  Controller,
  Request,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
  Headers,
  Query,
} from '@nestjs/common';
import { SignInService } from '../../application/sign.in.service';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SUCCESSFUL_RESPONSE } from '../../../shared/infraestructure/constants/constants';
import { AuthGuard } from '../../../shared/infraestructure/guards/auth.guards';

@Controller('auth')
@ApiTags('Auth')
export class GetProfileController {
  constructor() {}

  @HttpCode(HttpStatus.OK)
  @Get('profile')
  @ApiOperation({ summary: 'Login' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
  })
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  getProfile(@Request() req, @Query('username') username: string) {
    return req.user;
  }
}
