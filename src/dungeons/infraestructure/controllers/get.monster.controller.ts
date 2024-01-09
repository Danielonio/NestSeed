import { Controller, Get, Query } from '@nestjs/common';
import { GetMonsterService } from '../../application/get.monster.service';

@Controller('dungeons')
export class GetMonsterController {
  constructor(private readonly getMonsterService: GetMonsterService) {}

  @Get('monster')
  getMonster(@Query('name') name: string) {
    return this.getMonsterService.getMonster(name);
  }
}
