import { PageMetadataDto, PageMetadataDtoParameters } from './pagination.metadata.dto';
import { PaginationOptionsDto } from './pagination.options.dto';

export class PageObjectDto<T> {
  readonly data: T[];

  readonly paginationMetadata: PageMetadataDto;

  /*This centraliced constructor fot pagination is only useful when our application layer has to receive
  the full list of elements. If the database or service can provide the pagination, it is best to get it from that infra layer
  to avoid processing al of the elements*/
  constructor(fullListOfElements: T[], paginationOptions: PaginationOptionsDto) {
    const { pageNumber, pageSize } = paginationOptions;
    const pageMetadataDtoParameters: PageMetadataDtoParameters = {
      paginationOptions,
      totalItemCount: fullListOfElements.length,
    };
    const listPage = fullListOfElements.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize,
    );
    this.data = listPage;
    this.paginationMetadata = new PageMetadataDto(pageMetadataDtoParameters);
  }
}
