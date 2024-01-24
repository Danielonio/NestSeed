import { Injectable } from '@nestjs/common';
import { CreateGodDto } from '../dtos/create.god.dto';
import { GodRepository } from '../../domain/repositories/god.repository';
import { God } from '../../domain/entities/god';

@Injectable()
export class CreateGodService {
  constructor(private readonly godRepository: GodRepository) {}

  async createGod(godData: CreateGodDto): Promise<God> {
    const createdGod = this.godRepository.createGod(godData);
    return createdGod;
  }
}
