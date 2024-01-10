import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { GetMonsterService } from '../../application/get.monster.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MonsterDto } from '../../application/dtos/monster.dto';
import { SUCCESSFUL_RESPONSE } from '../../../shared/infraestructure/constants/constants';
import { MonsterIndexDto } from '../../application/dtos/monster.index.dto';

@Controller('dungeons')
@ApiTags('Dungeons & Dragons')
export class GetMonsterController {
  constructor(private readonly getMonsterService: GetMonsterService) {}

  @Get('monster')
  @ApiOperation({ summary: 'Get monster data from monster index' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: MonsterDto,
  })
  getMonster(@Query() input: MonsterIndexDto): Promise<MonsterDto> {
    return this.getMonsterService.getMonsterByIndex(input);
  }
}
