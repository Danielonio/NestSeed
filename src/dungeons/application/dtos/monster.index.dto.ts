import { ApiProperty } from '@nestjs/swagger';

export class MonsterIndexDto {
  @ApiProperty({
    type: String,
    example: 'acolyte',
  })
  index: string;
}
