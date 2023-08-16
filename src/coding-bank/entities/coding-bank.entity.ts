import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Example } from './example.entity';

export type CodingBankDocument = CodingBank & Document;

@Schema()
export class CodingBank extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: false })
  difficulty: string;

  @Prop({ required: true })
  order: string;

  @Prop({ required: true })
  videoId: string;

  @Prop({ required: false })
  link: string;

  @Prop({ required: false })
  problemStatement: string;

  @Prop([Example])
  example: Example[];

  @Prop({ default: false })
  constraints: string;

  @Prop({ default: false })
  starterCode: string;

  @Prop({ default: false })
  handlerFunction: string;

  @Prop({ default: false })
  starterFunctionName: string;
}

export const CodingBankSchema = SchemaFactory.createForClass(CodingBank);
