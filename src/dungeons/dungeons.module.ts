import { Module } from '@nestjs/common';
import { GetMonsterController } from './infraestructure/controllers/get.monster.controller';
import { GetMonsterService } from './application/get.monster.service';
import { MonsterRepository } from './domain/repositories/monster.repository';
import { DungeonsAndDragonsMonsterRepository } from './infraestructure/thirdPartyServices/dungeonsAndDragonsAPI/dungeonsAndDragonsService';

@Module({
  imports: [],
  controllers: [GetMonsterController],
  providers: [
    GetMonsterService,
    {
      provide: MonsterRepository,
      useClass: DungeonsAndDragonsMonsterRepository,
    },
  ],
})
export class DungeonsModule {}
