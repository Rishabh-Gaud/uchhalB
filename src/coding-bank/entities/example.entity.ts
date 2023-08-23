import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExampleDocument = Example & Document;

@Schema()
export class Example extends Document {
  @Prop({ required: true })
  inputText: string;

  @Prop({ required: true })
  outputText: string;

  @Prop({ required: false })
  explanation: string;

  @Prop({ required: false })
  img: string;
}

export const ExampleSchema = SchemaFactory.createForClass(Example);
