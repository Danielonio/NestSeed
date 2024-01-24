import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { GetGodsService } from '../../application/use-cases/get.gods.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SUCCESSFUL_RESPONSE } from '../../../shared/infraestructure/constants/constants';

@Controller('gods')
@ApiTags('Pantheon')
export class GetGodController {
  constructor(private readonly getGodService: GetGodsService) {}

  @Get('pantheon/:index')
  @ApiOperation({ summary: 'Get God data from god index' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
  })
  getMonster() {
    return this.getGodService.getGodByIndex();
  }
}
