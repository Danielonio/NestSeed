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

  async getMonsterList(
    paginationOptions: PaginationOptionsDto,
  ): Promise<PageObjectDto<String[]>> {
    const monsterList: String[] = await this.monsterRepository.getMonsterList();

    const pageMetadataDtoParameters: PageMetadataDtoParameters = {
      paginationOptions,
      itemCount: monsterList.length,
    };
    const { pageNumber, pageSize } = paginationOptions;

    const monsterListPage = monsterList.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize,
    );

    const monsterListPageAndMetadata = new PageObjectDto(
      monsterListPage,
      new PageMetadataDto(pageMetadataDtoParameters),
    );

    return monsterListPageAndMetadata;
  }
}
