import { Injectable } from '@nestjs/common';
import { God } from '../../infraestructure/mongo-db/schemas/god.chema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GetGodsService {
  constructor(@InjectModel(God.name) private godModel: Model<God>) {}

  async getGodByIndex() {
    return this.godModel.find().exec();
  }
}
