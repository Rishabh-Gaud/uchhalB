import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Test, TestDocument } from './entities/test.entity';
import { Model } from 'mongoose';
import { MCQ, MCQDocument } from 'src/mcq/entities/mcq.entity';
import { CodingBank, CodingBankDocument } from 'src/coding-bank/entities/coding-bank.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test.name)
    private testModel: Model<TestDocument>,
  ) { }
  async create(createTestDto: CreateTestDto) {
    const user = await new this.testModel(createTestDto);
    await user.save();
    return user;
  }

  findAll() {
    return `This action returns all test`;
  }

  async findOne(id: string) {
    try {

      const promblemData = await this.testModel.findOne({ testnumber: id });
      return promblemData;
    } catch (error) {
      console.log('[SERVER ERROR][CodingBankController:findOne]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
