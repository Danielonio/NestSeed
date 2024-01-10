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
}
