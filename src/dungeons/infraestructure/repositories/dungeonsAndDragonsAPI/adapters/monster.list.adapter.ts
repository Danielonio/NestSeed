import { DungeonsAndDragonsMonsterList } from '../interfaces/monster.list.interface';

export class MonsterListAdapter {
  public static mapServiceResponse(
    data: DungeonsAndDragonsMonsterList,
  ): String[] {
    try {
      const monsterList: String[] = data.results.map((result) => result.name);
      return monsterList;
    } catch (e) {
      // Adaption creation error
    }
  }
}
