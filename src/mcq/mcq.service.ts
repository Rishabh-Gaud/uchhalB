import { Injectable } from '@nestjs/common';
import { CreateMcqDto } from './dto/create-mcq.dto';
import { UpdateMcqDto } from './dto/update-mcq.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MCQ, MCQDocument } from './entities/mcq.entity';
import {MathMCQDocument, MathMCQ} from './entities/mathmcq.entity';
import {CPP, CPPDocument} from './entities/CodingLanguages/cpp.entity'
import { CPrograming, CProgramingDocument } from './entities/CodingLanguages/cProgramming.entity';
import { ArithmaticAptitude, ArithmaticAptitudeDocument } from './entities/TechAptitude/arithmaticAptitude.entity';
import { DataInterpretation, DataInterpretationDocument } from './entities/TechAptitude/dataInterpretation.entity';
import { LogicalReasoning, LogicalReasoningDocument } from './entities/TechAptitude/logicalReasoning.entity';
import { NonVerbalReasoning, NonVerbalReasoningDocument } from './entities/TechAptitude/nonVerbalReasoning.entity';
import { VerbalReasoning, VerbalReasoningDocument } from './entities/TechAptitude/VarbalReasoning.entity';
import { VerbalAbility, VerbalAbilityDocument } from './entities/TechAptitude/verbalAbility.entity';
import { Model } from 'mongoose';


@Injectable()
export class McqService {
  constructor(
    @InjectModel(MCQ.name)
    private mcqModel: Model<MCQDocument>,

    @InjectModel(CPP.name)
    private CPPModel: Model<CPPDocument>,

    @InjectModel(MathMCQ.name)
    private mathMcqModel: Model<MathMCQDocument>,

    @InjectModel(CPrograming.name)
    private CProgramingModel: Model<CProgramingDocument>,

    @InjectModel(ArithmaticAptitude.name)
    private ArithmaticAptitudeModel: Model<ArithmaticAptitudeDocument>,

    @InjectModel(DataInterpretation.name)
    private DataInterpretationModel: Model<DataInterpretationDocument>,

    @InjectModel(LogicalReasoning.name)
    private LogicalReasoningModel: Model<LogicalReasoningDocument>,

    @InjectModel(NonVerbalReasoning.name)
    private NonVerbalReasoningModel: Model<NonVerbalReasoningDocument>,

    @InjectModel(VerbalReasoning.name)
    private VerbalReasoningModel: Model<VerbalReasoningDocument>,

    @InjectModel(VerbalAbility.name)
    private VerbalAbilityModel: Model<VerbalAbilityDocument>
  ) { }
  async create(createMcqDto: CreateMcqDto, subject:string) {
    try {
      var mapping = {
        sriram: this.mcqModel,
        cpp:this.CPPModel,
        cprogramming:this.CProgramingModel,
        arithmaticaptitude:this.ArithmaticAptitudeModel,
        datainterpretation:this.DataInterpretationModel,
        logicalreasoning:this.LogicalReasoningModel,
        nonverbalreasoning:this.NonVerbalReasoningModel,
        verbalreasoning:this.VerbalReasoningModel,
        verbalability:this.VerbalAbilityModel
      };
      const questionCreated = await new mapping[subject](createMcqDto);
      await questionCreated.save();
      return questionCreated;
    } catch (error) {
      console.log('[SERVER ERROR] [McqService: create]', error);
      throw error;
    }
  }

  async createMathMCQ(createMcqDto: CreateMcqDto) {
    try {
      const questionCreated = await new this.mathMcqModel(createMcqDto);
      await questionCreated.save();
      return questionCreated;
    } catch (error) {
      console.log('[SERVER ERROR] [McqService: create]', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const data = await this.mcqModel.find().exec();
      return data;
    } catch (error) {
      console.log('[SERVER ERROR][McqService:findAll]: ', error);
      throw error;
    }
  }

  async gettopics(subject:string) {
    try {
      var mapping = {
        sriram: this.mcqModel,
        cpp:this.CPPModel,
        cprogramming:this.CProgramingModel,
        arithmaticaptitude:this.ArithmaticAptitudeModel,
        datainterpretation:this.DataInterpretationModel,
        logicalreasoning:this.LogicalReasoningModel,
        nonverbalreasoning:this.NonVerbalReasoningModel,
        verbalreasoning:this.VerbalReasoningModel,
        verbalability:this.VerbalAbilityModel
      };
      console.log(subject);
      const data = await mapping[subject].distinct("category").exec();
      return data;
    } catch (error) {
      console.log('[SERVER ERROR][McqService:findAll]: ', error);
      throw error;
    }
  }

  async quiz() {
    try {
      var mapping = {
        sriram: this.mcqModel,
        cpp:this.CPPModel,
        cprogramming:this.CProgramingModel,
        arithmaticaptitude:this.ArithmaticAptitudeModel,
        datainterpretation:this.DataInterpretationModel,
        logicalreasoning:this.LogicalReasoningModel,
        nonverbalreasoning:this.NonVerbalReasoningModel,
        verbalreasoning:this.VerbalReasoningModel,
        verbalability:this.VerbalAbilityModel
      };
      const arithmaticqq = await mapping["sriram"].aggregate([{ $sample: { size: 3 } }]);
      const datainterpretationqq = await mapping["sriram"].aggregate([{ $sample: { size: 3 } }]);
      const logicalreasoningqq = await mapping["sriram"].aggregate([{ $sample: { size: 3 } }]);
      const verbalreasoningqq = await mapping["sriram"].aggregate([{ $sample: { size: 3 } }]);
      const verbalabilityqq = await mapping["sriram"].aggregate([{ $sample: { size: 3 } }]);
      const data = arithmaticqq.concat(datainterpretationqq,logicalreasoningqq,verbalabilityqq,verbalreasoningqq);
      return data;
    } catch (error) {
      console.log('[SERVER ERROR][McqService:findAll]: ', error);
      throw error;
    }
  }

  async subjectquiz(subject: string){
    try{
      var mapping = {
        sriram: this.mcqModel,
        cpp:this.CPPModel,
        cprogramming:this.CProgramingModel,
        arithmaticaptitude:this.ArithmaticAptitudeModel,
        datainterpretation:this.DataInterpretationModel,
        logicalreasoning:this.LogicalReasoningModel,
        nonverbalreasoning:this.NonVerbalReasoningModel,
        verbalreasoning:this.VerbalReasoningModel,
        verbalability:this.VerbalAbilityModel
      };

      const data = await mapping[subject].aggregate([{ $sample: {size: 10}}]);
      return data;
    } catch (error) {
      console.log('[SERVER ERROR][McqService:findAll]: ', error);
      throw error;
    }
  }

  findOne(id: string) {
    return this.mcqModel.findById({ _id: id });
  }

  update(id: number, updateMcqDto: UpdateMcqDto) {
    return `This action updates a #${id} mcq`;
  }

  remove(id: number) {
    return `This action removes a #${id} mcq`;
  }
}
