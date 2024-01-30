import { Injectable } from '@nestjs/common';
import { CreateGodDto } from '../dtos/create.god.dto';
import { GodRepository } from '../../domain/repositories/god.repository';
import { God } from '../../domain/entities/god';

@Injectable()
export class SaveGodService {
  constructor(private readonly godRepository: GodRepository) {}

  async execute(godData: CreateGodDto): Promise<God> {
    const { name, culture, powers } = godData;
    const god = new God(undefined, name, culture, powers);
    const createdGod = this.godRepository.saveGod(god);
    return createdGod;
  }
}
