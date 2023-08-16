// user.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: false })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  address: string;

  @Prop({ required: false, minlength: 6 })
  pincode: number;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop()
  verificationCode: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
/*
codingProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	order: number;
	videoId?: string;
	link?: string;

	id: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
}

Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};


dailyquiz = {
	id: number;
	mcq: mcqquestion[];
	coding: codingquestion[];
}

user = {
	*id:number;
	*first-name: string;
	*second-name: string;
	*email: string, unique;
	*password:string;
	*username:string, unique;
	solved-problem:codingproblem[];
	solved-quiz: daily-quiz[];
	current-streak: number;
	solved-today:boolean;
	total-points:number;
	rank:number;
	collage-name:string;
	adderess:string;
}

mcqquestion = {
	id:number;
	explanation?: string;
	options:string[];
	correctoption:number;
}
*/
