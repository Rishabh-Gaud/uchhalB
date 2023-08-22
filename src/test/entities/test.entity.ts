
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MCQ } from 'src/mcq/entities/mcq.entity';

export type TestDocument = Test & Document;

@Schema()
export class Test extends Document {
    @Prop({ required: true })
    testnumber: string;

    @Prop([MCQ])
    mcqs: MCQ[];

    @Prop([])
    codings: [];
}

export const TestSchema = SchemaFactory.createForClass(Test);

// mcqquestion = {
// 	id:number;
// 	explanation?: string;
// 	options:string[];
// 	correctoption:number;
// }