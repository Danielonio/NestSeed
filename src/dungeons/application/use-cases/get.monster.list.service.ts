import { Injectable } from '@nestjs/common';
import { MonsterRepository } from '../../domain/repositories/monster.repository';
import { PageObjectDto } from '../../../shared/application/dto/pagination.dtos/page.dto';
import {
  PageMetadataDto,
  PageMetadataDtoParameters,
} from '../../../shared/application/dto/pagination.dtos/pagination.metadata.dto';
import { PaginationOptionsDto } from '../../../shared/application/dto/pagination.dtos/pagination.options.dto';

@Injectable()
export class GetMonsterListService {
  constructor(private readonly monsterRepository: MonsterRepository) {}

  async execute(paginationOptions: PaginationOptionsDto): Promise<PageObjectDto<String>> {
    const monsterList: String[] = await this.monsterRepository.getMonsterList();
    return new PageObjectDto(monsterList, paginationOptions);
  }
}
