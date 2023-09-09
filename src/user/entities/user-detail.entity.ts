import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDetailDocument = UserDetail & Document;

@Schema()
export class UserDetail extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: false })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  address: string;

  @Prop({ required: false })
  facebook: string;

  @Prop({ required: false })
  linkedin: string;

  @Prop({ required: false, unique: false })
  github: string;

  @Prop({ required: false })
  college: string;

  @Prop({ required: false })
  department: string;

  @Prop({ required: false })
  degree: string;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop()
  verificationCode: string;
}

export const UserDetailSchema = SchemaFactory.createForClass(UserDetail);
