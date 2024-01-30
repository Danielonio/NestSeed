import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { GetMonsterService } from '../../application/use-cases/get.monster.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MonsterDto } from '../../application/dtos/monster.dto';
import { SUCCESSFUL_RESPONSE } from '../../../shared/infraestructure/constants/constants';
import { MonsterIndexDto } from '../../application/dtos/monster.index.dto';

@Controller('dungeons')
@ApiTags('Dungeons & Dragons')
export class GetMonsterController {
  constructor(private readonly getMonsterService: GetMonsterService) {}

  @Get('monster/:index')
  @ApiOperation({ summary: 'Get monster data from monster index' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: MonsterDto,
  })
  getMonster(@Param() input: MonsterIndexDto): Promise<MonsterDto> {
    return this.getMonsterService.execute(input);
  }
}
