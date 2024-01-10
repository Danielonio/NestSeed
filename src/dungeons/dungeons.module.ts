import { Module } from '@nestjs/common';
import { GetMonsterController } from './infraestructure/controllers/get.monster.controller';
import { GetMonsterService } from './application/get.monster.service';
import { MonsterRepository } from './domain/repositories/monster.repository';
import { DungeonsAndDragonsMonsterRepository } from './infraestructure/repositories/dungeonsAndDragonsAPI/dungeons.and.dragons.monster.repository';
@Module({
  imports: [],
  controllers: [GetMonsterController],
  providers: [
    GetMonsterService,
    {
      provide: MonsterRepository,
      useClass: DungeonsAndDragonsMonsterRepository,
      /* 
      useClass: AnotherMonsterRepository,
      Use this line to change the infraestructure implementation
      without changing anything on the domain and application layers!!
      */
    },
  ],
})
export class DungeonsModule {}
