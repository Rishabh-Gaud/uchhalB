import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VerbalReasoningDocument = VerbalReasoning & Document;

@Schema()
export class VerbalReasoning extends Document {

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  explanation: string;

  @Prop({ required: true })
  description:string;

  @Prop({ required: true })
  correct: string;
  
  @Prop([String])
  options: String[];
}

export const VerbalReasoningSchema = SchemaFactory.createForClass(VerbalReasoning);