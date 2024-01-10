import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { HttpClient } from '../../../../shared/infraestructure/http/httpClient';
import { MonsterRepository } from '../../../domain/repositories/monster.repository';
import { MonsterAdapter } from './adapters/monster.adapter';

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
    const monster: Monster = MonsterAdapter.mapServiceResponse(
      monsterRequest.data,
    );
    return monster;
  }
}
