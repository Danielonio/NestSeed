import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GodDocument = HydratedDocument<GodS>;

@Schema()
export class GodS {
  @Prop()
  name: string;

  @Prop()
  culture: string;

  @Prop()
  powers: string[];
}

export const GodSchema = SchemaFactory.createForClass(GodS);
/*
Alternatively, if you prefer not using decorators, you can define a schema manually.
For example:
export const GodSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
*/
