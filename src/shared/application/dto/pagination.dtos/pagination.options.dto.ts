import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';
// import { Order } from '../constants';

export class PaginationOptionsDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly pageNumber?: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly pageSize?: number = 10;
}
