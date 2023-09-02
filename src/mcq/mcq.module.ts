import { Module } from '@nestjs/common';
import { McqService } from './mcq.service';
import { McqController } from './mcq.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { MCQ, MCQSchema } from './entities/mcq.entity';
import { MathMCQ, MathMCQSchema } from './entities/mathmcq.entity';
import {CPP, CPPSchema} from './entities/CodingLanguages/cpp.entity'
import { CPrograming, CProgramingSchema } from './entities/CodingLanguages/cProgramming.entity';
import { ArithmaticAptitude, ArithmaticAptitudeSchema } from './entities/TechAptitude/arithmaticAptitude.entity';
import { DataInterpretation, DataInterpretationSchema } from './entities/TechAptitude/dataInterpretation.entity';
import { LogicalReasoning, LogicalReasoningSchema } from './entities/TechAptitude/logicalReasoning.entity';
import { NonVerbalReasoning, NonVerbalReasoningSchema } from './entities/TechAptitude/nonVerbalReasoning.entity';
import { VerbalReasoning, VerbalReasoningSchema } from './entities/TechAptitude/VarbalReasoning.entity';
import { VerbalAbility, VerbalAbilitySchema } from './entities/TechAptitude/verbalAbility.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: MCQ.name, schema: MCQSchema }, {name: MathMCQ.name, schema:MathMCQSchema},
  {name:CPP.name, schema:CPPSchema}, {name:CPrograming.name, schema:CProgramingSchema},
  {name:ArithmaticAptitude.name, schema:ArithmaticAptitudeSchema},{name:DataInterpretation.name, schema:DataInterpretationSchema},
  {name:LogicalReasoning.name, schema:LogicalReasoningSchema}, {name:NonVerbalReasoning.name, schema:NonVerbalReasoningSchema},
  {name:VerbalReasoning.name, schema:VerbalReasoningSchema}, {name:VerbalAbility.name, schema:VerbalAbilitySchema}])],
  controllers: [McqController],
  providers: [McqService],
})
export class McqModule { }
