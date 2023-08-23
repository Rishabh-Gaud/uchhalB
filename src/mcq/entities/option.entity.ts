
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OptionDocument = Option & Document;

@Schema()
export class Option extends Document {

  @Prop({ required: true })
  option: string;
  
}

export const OptionSchema = SchemaFactory.createForClass(Option);

// mcqquestion = {
// 	id:number;
// 	explanation?: string;
// 	options:string[];
// 	correctoption:number;
// }