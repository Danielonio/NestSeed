import { Module } from '@nestjs/common';
import { GetMonsterController } from './infraestructure/controllers/get.monster.controller';
import { GetMonsterService } from './application/get.monster.service';
import { DungeonsAndDragonsService } from './infraestructure/thirdPartyServices/dungeonsAndDragonsAPI/dungeonsAndDragonsService';

@Module({
  imports: [],
  controllers: [GetMonsterController],
  providers: [GetMonsterService, DungeonsAndDragonsService],
})
export class DungeonsModule {}
