import { Injectable } from '@nestjs/common';
import { DungeonsAndDragonsService } from '../infraestructure/thirdPartyServices/dungeonsAndDragonsAPI/dungeonsAndDragonsService';

@Injectable()
export class GetMonsterService {
  constructor(
    private readonly dungeonsAndDragonsService: DungeonsAndDragonsService,
  ) {}
  getMonster(name) {
    return this.dungeonsAndDragonsService.getMonsterDataByIndex(name);
  }
}
