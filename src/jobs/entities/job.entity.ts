
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema()
export class Job extends Document {
  
  @Prop({ required: true })
  companyName:string;

  @Prop({ required: true })
	title:string;

  @Prop({ required: true })
	location:string;

  @Prop({ required: true })
	imageUrl:string;

  @Prop({ required: true })
	type:string;

  @Prop({ required: true })
	redirectLink:string;

  @Prop({ required: true })
	requiredExperience:string;

  @Prop({ required: true })
	salary:string;

  @Prop({ required: true })
	skills:string;

  @Prop({ required: true })
	createdAt:string;


}

export const JobSchema = SchemaFactory.createForClass(Job);