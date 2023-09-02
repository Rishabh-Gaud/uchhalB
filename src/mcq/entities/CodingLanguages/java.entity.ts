import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JavaDocument = Java & Document;

@Schema()
export class Java extends Document {
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

export const JavaSchema = SchemaFactory.createForClass(Java);