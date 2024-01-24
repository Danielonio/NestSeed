import { Injectable } from '@nestjs/common';
import { God } from '../../infraestructure/mongo-db/schemas/god.chema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGodDto } from '../dtos/create.god.dto';

@Injectable()
export class CreateGodService {
  constructor(@InjectModel(God.name) private godModel: Model<God>) {}

  async createGod(godData: CreateGodDto): Promise<God> {
    const createdGod = new this.godModel(godData);
    return createdGod.save();
  }
}
