import { Module } from '@nestjs/common';
import { McqService } from './mcq.service';
import { McqController } from './mcq.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { MCQ, MCQSchema } from './entities/mcq.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: MCQ.name, schema: MCQSchema }])],
  controllers: [McqController],
  providers: [McqService],
})
export class McqModule { }
