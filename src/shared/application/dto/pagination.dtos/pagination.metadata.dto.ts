import { PaginationOptionsDto } from './pagination.options.dto';

export class PageMetadataDto {
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly itemCount: number;
  readonly pageCount: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;

  constructor({ paginationOptions, itemCount }: PageMetadataDtoParameters) {
    this.pageNumber = paginationOptions.pageNumber;
    this.pageSize = paginationOptions.pageSize;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.pageSize);
    this.hasPreviousPage = this.pageNumber > 1;
    this.hasNextPage = this.pageNumber < this.pageCount;
  }
}
export interface PageMetadataDtoParameters {
  paginationOptions: PaginationOptionsDto;
  itemCount: number;
}
