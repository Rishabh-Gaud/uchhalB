import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CodingBankService } from './coding-bank.service';
import { CreateCodingBankDto } from './dto/create-coding-bank.dto';
import { UpdateCodingBankDto } from './dto/update-coding-bank.dto';

@Controller('coding-bank')
export class CodingBankController {
  constructor(private readonly codingBankService: CodingBankService) {}

  @Post('')
  async create(@Body() createCodingBankDto: CreateCodingBankDto) {
    try {
      const createProblem = await this.codingBankService.create(
        createCodingBankDto,
      );
      return { statusCode: 201, isSuccess: true, data: createProblem };
    } catch (error) {
      console.log('[SERVER ERROR][CodingBankController:createUser]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Get('')
  async findAll() {
    try {
      const data = await this.codingBankService.findAll();
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[SERVER ERROR][CodingBankController:findAll]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Get(':title')
  async findOne(@Param('title') title: string) {
    try {
      const data = await this.codingBankService.findOne(title.replace(/-/g, " "));
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[SERVER ERROR][CodingBankController:findOne]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCodingBankDto: UpdateCodingBankDto,
  ) {
    try {
      const data = await this.codingBankService.update(id, updateCodingBankDto);
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[SERVER ERROR][CodingBankController:update]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }
}
