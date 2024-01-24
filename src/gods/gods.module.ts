import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  GodS,
  GodSchema,
} from './infraestructure/repositories/mongo-db/schemas/god.schema';
import { GetGodController } from './infraestructure/controllers/get.god.controller';
import { GetGodsService } from './application/use-cases/get.gods.service';
import { CreateGodController } from './infraestructure/controllers/create.god.controller';
import { CreateGodService } from './application/use-cases/create.god.service';
import { GodRepository } from './domain/repositories/god.repository';
import { MongoDBGodRepository } from './infraestructure/repositories/mongo-db/mongo.db.god.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: GodS.name, schema: GodSchema }])],
  controllers: [GetGodController, CreateGodController],
  providers: [
    GetGodsService,
    CreateGodService,
    { provide: GodRepository, useClass: MongoDBGodRepository },
  ],
})
export class GodsModule {}
