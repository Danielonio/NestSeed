import { Injectable } from '@nestjs/common';
import { DungeonsAndDragonsHttpClient } from './dungeonsAndDragonsClient';

@Injectable()
export class DungeonsAndDragonsService {
  private dungeonsAndDragonsHttpClient: DungeonsAndDragonsHttpClient;
  constructor() {
    this.dungeonsAndDragonsHttpClient = new DungeonsAndDragonsHttpClient();
  }

  async getMonsterData(index: string) {
    const monsterData = await this.dungeonsAndDragonsHttpClient.get(
      `monsters/${index}`,
    );
    return monsterData;
  }
}
