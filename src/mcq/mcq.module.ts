import { Module } from '@nestjs/common';
import { McqService } from './mcq.service';
import { McqController } from './mcq.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { MCQ, MCQSchema } from './entities/mcq.entity';
import { MathMCQ, MathMCQSchema } from './entities/mathmcq.entity';
import {CPP, CPPSchema} from './entities/CodingLanguages/cpp.entity'
import { CPrograming, CProgramingSchema } from './entities/CodingLanguages/cProgramming.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: MCQ.name, schema: MCQSchema }, {name: MathMCQ.name, schema:MathMCQSchema},
  {name:CPP.name, schema:CPPSchema}, {name:CPrograming.name, schema:CProgramingSchema}])],
  controllers: [McqController],
  providers: [McqService],
})
export class McqModule { }
