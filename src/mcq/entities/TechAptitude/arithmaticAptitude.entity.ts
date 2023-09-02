import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArithmaticAptitudeDocument = ArithmaticAptitude & Document;

@Schema()
export class ArithmaticAptitude extends Document {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  explanation: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  correct: string;
  
  @Prop([String])
  options: String[];
}

export const ArithmaticAptitudeSchema = SchemaFactory.createForClass(ArithmaticAptitude);