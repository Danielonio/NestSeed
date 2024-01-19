import { PaginationOptionsDto } from './pagination.options.dto';

export class PageMetadataDto {
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly totalItemCount: number;
  readonly totalPageCount: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;

  constructor({ paginationOptions, totalItemCount }: PageMetadataDtoParameters) {
    this.pageNumber = paginationOptions.pageNumber;
    this.pageSize = paginationOptions.pageSize;
    this.totalItemCount = totalItemCount;
    this.totalPageCount = Math.ceil(this.totalItemCount / this.pageSize);
    this.hasPreviousPage = this.pageNumber > 1;
    this.hasNextPage = this.pageNumber < this.totalPageCount;
  }
}

export interface PageMetadataDtoParameters {
  paginationOptions: PaginationOptionsDto;
  totalItemCount: number;
}
