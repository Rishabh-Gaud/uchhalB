import { Injectable } from '@nestjs/common';
import { CreateMcqDto } from './dto/create-mcq.dto';
import { UpdateMcqDto } from './dto/update-mcq.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MCQ, MCQDocument } from './entities/mcq.entity';
import {MathMCQDocument, MathMCQ} from './entities/mathmcq.entity';
import { Model } from 'mongoose';

@Injectable()
export class McqService {
  constructor(
    @InjectModel(MCQ.name)
    private mcqModel: Model<MCQDocument>,

    @InjectModel(MathMCQ.name)
    private mathMcqModel: Model<MathMCQDocument>
  ) { }
  async create(createMcqDto: CreateMcqDto) {
    try {
      const questionCreated = await new this.mcqModel(createMcqDto);
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

  async quiz() {
    try {
      const data = await this.mathMcqModel.find().exec();
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
