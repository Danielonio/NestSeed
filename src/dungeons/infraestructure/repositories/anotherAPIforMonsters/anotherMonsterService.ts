import { Injectable } from '@nestjs/common';
import { MonsterRepository } from '../../../domain/repositories/monster.repository';

@Injectable()
export class AnotherMonsterRepository implements MonsterRepository {
  async getMonsterByIndex(index): Promise<Monster> {
    return {
      name: 'The Other Service Name',
      index: 'The Other Service Index',
      hitPoints: 100,
    };
  }

  async getMonsterList(): Promise<String[]> {
    return ['Monster1', 'Monster2', 'Monster3'];
  }
}
