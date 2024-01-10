import { DungeonsAndDragonsMonster } from '../interfaces/monster.interface';

export class MonsterAdapter {
  public static mapServiceResponse(data: DungeonsAndDragonsMonster): Monster {
    try {
      const monster: Monster = {
        name: data.name,
        index: data.index,
        hitPoints: data.hit_points,
      };
      return monster;
    } catch (e) {
      // Entity creation error
    }
  }
}
