import { Injectable } from '@nestjs/common';
import { GodRepository } from '../../domain/repositories/god.repository';
import { God } from '../../domain/entities/god';

@Injectable()
export class GetGodsService {
  constructor(private readonly godRepository: GodRepository) {}

  async execute(): Promise<God[]> {
    const createdGod = this.godRepository.getGods();
    return createdGod;
  }
}
