
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Option } from './option.entity';

export type MCQDocument = MCQ & Document;

@Schema()
export class MCQ extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: false })
  difficulty: string;

  @Prop({ required: true })
  explanation: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  correct: string;
  
  @Prop([Option])
  options: Option[];
}

export const MCQSchema = SchemaFactory.createForClass(MCQ);

// mcqquestion = {
// 	id:number;
// 	explanation?: string;
// 	options:string[];
// 	correctoption:number;
// }