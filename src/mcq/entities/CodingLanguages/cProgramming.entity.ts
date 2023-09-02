import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CProgramingDocument = CPrograming & Document;

@Schema()
export class CPrograming extends Document {
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

export const CProgramingSchema = SchemaFactory.createForClass(CPrograming);