import { Body, Controller, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SUCCESSFUL_RESPONSE } from '../../../shared/infraestructure/constants/constants';
import { CreateGodDto } from '../../application/dtos/create.god.dto';
import { CreateGodService } from '../../application/use-cases/create.god.service';

@Controller('gods')
@ApiTags('Pantheon')
export class CreateGodController {
  constructor(private readonly createGodService: CreateGodService) {}

  @Post('pantheon')
  @ApiOperation({ summary: 'Create god' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
  })
  getMonster(@Body() monsterData: CreateGodDto) {
    return this.createGodService.createGod(monsterData);
  }
}
