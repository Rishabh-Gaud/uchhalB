import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Option } from './option.entity';

export type MathMCQDocument = MathMCQ & Document;

@Schema()
export class MathMCQ extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: false })
  difficulty: string;

  @Prop({ required: true })
  explanation: string;

  @Prop({ required: true })
  description:string;

  @Prop({ required: true })
  correct: string;
  
  @Prop([Option])
  options: Option[];
}

export const MathMCQSchema = SchemaFactory.createForClass(MathMCQ);