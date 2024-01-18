import { IsEmail, IsString } from 'class-validator';

export class MonsterIndexDto {
  @IsString()
  index: string;
}
