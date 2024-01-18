import { IsLowercase } from 'class-validator';

export class MonsterIndexDto {
  @IsLowercase()
  index: string;
}
