import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestCaseDocument = TestCase & Document;

@Schema()
export class TestCase extends Document {
  @Prop({ required: true })
  inputText: string;

  @Prop({ required: true })
  outputText: string;
  
}

export const ExampleSchema = SchemaFactory.createForClass(TestCase);