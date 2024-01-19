import { Injectable } from '@nestjs/common';
import { MonsterRepository } from '../../domain/repositories/monster.repository';
import { MonsterDto } from '../dtos/monster.dto';
import { MonsterIndexDto } from '../dtos/monster.index.dto';

@Injectable()
export class GetMonsterListService {
  constructor(private readonly monsterRepository: MonsterRepository) {}

  async getMonsterList(): Promise<String[]> {
    const monsterList: String[] = await this.monsterRepository.getMonsterList();
    return monsterList;
  }
}
