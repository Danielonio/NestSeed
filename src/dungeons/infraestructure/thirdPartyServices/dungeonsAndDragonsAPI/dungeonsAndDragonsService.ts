import { Injectable } from '@nestjs/common';
import { DungeonsAndDragonsHttpClient } from './dungeonsAndDragonsClient';
import { DungeonsAndDragonsMonster } from './interfaces/monster.interface';

@Injectable()
export class DungeonsAndDragonsService {
  private dungeonsAndDragonsHttpClient: DungeonsAndDragonsHttpClient;
  constructor() {
    this.dungeonsAndDragonsHttpClient = new DungeonsAndDragonsHttpClient();
  }

  async getMonsterDataByIndex(index: string): Promise<Monster> {
    const monsterData = (await this.dungeonsAndDragonsHttpClient.get(
      `monsters/${index}`,
    )) as DungeonsAndDragonsMonster;

    return {
      name: monsterData.name,
      index: monsterData.index,
      hitPoints: monsterData.hit_points,
    };
  }
}
