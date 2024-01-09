export abstract class MonsterRepository {
  abstract getMonsterByIndex(index: string): Promise<Monster>;
}
