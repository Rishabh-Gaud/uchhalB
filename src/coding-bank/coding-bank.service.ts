import { Injectable } from '@nestjs/common';
import { CreateCodingBankDto } from './dto/create-coding-bank.dto';
import { UpdateCodingBankDto } from './dto/update-coding-bank.dto';
import { CodingBank, CodingBankDocument } from './entities/coding-bank.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CodingBankService {
  constructor(
    @InjectModel(CodingBank.name)
    private codingBankModel: Model<CodingBankDocument>,
  ) {}
  async create(createCodingBankDto: CreateCodingBankDto) {
    try {
      const user = await new this.codingBankModel(createCodingBankDto);
      await user.save();
      return user;
    } catch (error) {
      console.log('[SERVER ERROR] [CODINGBANKSERVICE: create]', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const data = await this.codingBankModel.find().exec();
      return data;
    } catch (error) {
      console.log('[SERVER ERROR][CodingBankService:findAll]: ', error);
      throw error;
    }
  }

  async findOne(title: string) {
    try {
      const promblemData = await this.codingBankModel.findOne({ title });
      return promblemData;
    } catch (error) {
      console.log('[SERVER ERROR][CodingBankController:findOne]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  async update(id: string, updateCodingBankDto: UpdateCodingBankDto) {
    try {
      const updatedDocument = await this.codingBankModel
        .findOneAndUpdate(
          { _id: id },
          { $set: updateCodingBankDto },
          { new: true }, // Return the updated document
        )
        .exec();

      return updatedDocument;
    } catch (error) {
      console.log('[SERVER ERROR][CodingBankController:update]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }
}
