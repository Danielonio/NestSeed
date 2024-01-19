import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MonsterDto } from '../../application/dtos/monster.dto';
import { SUCCESSFUL_RESPONSE } from '../../../shared/infraestructure/constants/constants';
import { GetMonsterListService } from '../../application/use-cases/get.monster.list.service';

@Controller('dungeons')
@ApiTags('Dungeons & Dragons')
export class GetMonsterListController {
  constructor(private readonly getMonsterListService: GetMonsterListService) {}

  @Get('monster')
  @ApiOperation({ summary: 'Get the full  monster list (paginated)' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: String,
    isArray: true,
  })
  getMonster(): Promise<String[]> {
    return this.getMonsterListService.getMonsterList();
  }
}
