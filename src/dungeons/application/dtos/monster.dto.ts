export class MonsterDto {
  name: string;

  index: string;
  /**
   * @example '0220'
   */
  hitPoints: number;

  hitPointsMultiplied: number;

  //TODO: change this for a contstructor, use new MonsterDto(monster) in usecase
  public static entityToDto(monster: Monster): MonsterDto {
    return {
      name: monster.name,
      index: monster.index,
      hitPoints: monster.hitPoints,
      hitPointsMultiplied: monster.hitPoints * 10,
    };
  }
}
