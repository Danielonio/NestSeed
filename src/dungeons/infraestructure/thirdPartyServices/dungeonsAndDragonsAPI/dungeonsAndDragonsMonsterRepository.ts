import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { HttpClient } from '../../../../shared/infraestructure/http/httpClient';
import { DungeonsAndDragonsMonster } from './interfaces/monster.interface';
import { MonsterRepository } from '../../../domain/repositories/monster.repository';

@Injectable()
export class DungeonsAndDragonsMonsterRepository implements MonsterRepository {
  private httpClient: HttpClient;
  private baseEndpoint: string;

  constructor() {
    this.httpClient = new HttpClient(DungeonsAndDragonsMonsterRepository.name);
    this.baseEndpoint = 'https://www.dnd5eapi.co/api/';
  }

  async getMonsterByIndex(index: string): Promise<Monster> {
    const monsterRequest = await this.httpClient.get(
      this.baseEndpoint + `monsters/${index}`,
    );
    if (monsterRequest.status !== HttpStatus.OK) {
      throw new NotFoundException('Monster not found');
    }
    const monsterData = monsterRequest.data as DungeonsAndDragonsMonster;

    return {
      name: monsterData.name,
      index: monsterData.index,
      hitPoints: monsterData.hit_points,
    };
  }
}
