import {
  Controller,
  Request,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
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
  //This next two decorators should always be used together
  //to extract the user info from the request object and correctly integrate swagger
  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  getProfile(@Request() req, @Query('username') someQuery: string) {
    //Req.user contains the user info extracted from AuthGuard.
    //We can now call our application layer and pass the user info to it
    return req.user;
  }
}
