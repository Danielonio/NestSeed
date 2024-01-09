import { Injectable } from '@nestjs/common';
import { MonsterRepository } from '../domain/repositories/monster.repository';

@Injectable()
export class GetMonsterService {
  constructor(private readonly monsterRepository: MonsterRepository) {}

  async getMonsterByIndex(index) {
    const monster: Monster =
      await this.monsterRepository.getMonsterByIndex(index);
    return monster;
  }
}
