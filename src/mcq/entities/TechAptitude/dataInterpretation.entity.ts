import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DataInterpretationDocument = DataInterpretation & Document;

@Schema()
export class DataInterpretation extends Document {

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

export const DataInterpretationSchema = SchemaFactory.createForClass(DataInterpretation);