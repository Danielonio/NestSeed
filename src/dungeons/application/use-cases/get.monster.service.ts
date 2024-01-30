import { Injectable } from '@nestjs/common';
import { MonsterRepository } from '../../domain/repositories/monster.repository';
import { MonsterDto } from '../dtos/monster.dto';
import { MonsterIndexDto } from '../dtos/monster.index.dto';

@Injectable()
export class GetMonsterService {
  constructor(private readonly monsterRepository: MonsterRepository) {}

  async execute(input: MonsterIndexDto): Promise<MonsterDto> {
    const monster: Monster = await this.monsterRepository.getMonsterByIndex(input.index);
    return MonsterDto.entityToDto(monster);
  }
}
