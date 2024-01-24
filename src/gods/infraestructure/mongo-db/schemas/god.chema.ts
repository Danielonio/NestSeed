import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GodDocument = HydratedDocument<God>;

@Schema()
export class God {
  @Prop()
  name: string;

  @Prop()
  culture: string;

  @Prop()
  powers: string;
}

export const GodSchema = SchemaFactory.createForClass(God);
/*
Alternatively, if you prefer not using decorators, you can define a schema manually.
For example:
export const GodSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
*/
