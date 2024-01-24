import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GodRepository } from '../../../domain/repositories/god.repository';
import { God } from '../../../domain/entities/god';
import { GodS } from './schemas/god.schema';

@Injectable()
export class MongoDBGodRepository implements GodRepository {
  constructor(@InjectModel(GodS.name) private godModel: Model<GodS>) {}

  createGod(god: God) {
    const createdGod = new this.godModel(god);
    return createdGod.save();
  }

  getGods() {
    return this.godModel.find().exec();
  }
}
