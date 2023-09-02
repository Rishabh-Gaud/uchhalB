import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogicalReasoningDocument = LogicalReasoning & Document;

@Schema()
export class LogicalReasoning extends Document {

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

export const LogicalReasoningSchema = SchemaFactory.createForClass(LogicalReasoning);