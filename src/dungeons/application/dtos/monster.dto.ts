import { ApiProperty } from '@nestjs/swagger';

export class MonsterDto {
  @ApiProperty({
    type: String,
    example: 'Acolyte',
  })
  name: string;

  @ApiProperty({
    type: String,
    example: 'red-acolyte',
  })
  index: string;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  hitPoints: number;

  @ApiProperty({
    type: Number,
    example: 10,
  })
  hitPointsMultiplied: number;

  public static entityToDto(monster: Monster): MonsterDto {
    return {
      name: monster.name,
      index: monster.index,
      hitPoints: monster.hitPoints,
      hitPointsMultiplied: monster.hitPoints * 10,
    };
  }
}
