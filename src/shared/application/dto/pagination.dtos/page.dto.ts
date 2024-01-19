import { PageMetadataDto } from './pagination.metadata.dto';

export class PageObjectDto<T> {
  readonly data: T;

  readonly meta: PageMetadataDto;

  constructor(data: T, meta: PageMetadataDto) {
    this.data = data;
    this.meta = meta;
  }
}
