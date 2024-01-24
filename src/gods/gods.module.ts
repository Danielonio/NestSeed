import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { God, GodSchema } from './infraestructure/mongo-db/schemas/god.chema';
import { GetGodController } from './infraestructure/controllers/get.god.controller';
import { GetGodsService } from './application/use-cases/get.gods.service';
import { CreateGodController } from './infraestructure/controllers/create.god.controller';
import { CreateGodService } from './application/use-cases/create.god.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: God.name, schema: GodSchema }])],
  controllers: [GetGodController, CreateGodController],
  providers: [GetGodsService, CreateGodService],
})
export class GodsModule {}
