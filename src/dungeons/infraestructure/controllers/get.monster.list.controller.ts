import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SUCCESSFUL_RESPONSE } from '../../../shared/infraestructure/constants/constants';
import { GetMonsterListService } from '../../application/use-cases/get.monster.list.service';
import { PageObjectDto } from '../../../shared/application/dto/pagination.dtos/page.dto';
import { PaginationOptionsDto } from '../../../shared/application/dto/pagination.dtos/pagination.options.dto';

@Controller('dungeons')
@ApiTags('Dungeons & Dragons')
export class GetMonsterListController {
  constructor(private readonly getMonsterListService: GetMonsterListService) {}

  @Get('monster')
  @ApiOperation({ summary: 'Get the full  monster list (paginated)' })
  @ApiOkResponse({
    description: SUCCESSFUL_RESPONSE,
    status: HttpStatus.OK,
    type: String,
    isArray: true,
  })
  getMonster(
    @Query() paginationOptions: PaginationOptionsDto,
  ): Promise<PageObjectDto<String>> {
    return this.getMonsterListService.execute(paginationOptions);
  }
}
