import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompilerService } from './compiler.service';
import { CreateCompilerDto } from './dto/create-compiler.dto';
import { UpdateCompilerDto } from './dto/update-compiler.dto';

@Controller('compiler')
export class CompilerController {
  constructor(private readonly compilerService: CompilerService) { }

  @Post()
  async create(@Body() body: { codeCpp: string, problemId:string }) {
    try {
      const data = await this.compilerService.executeCode(body.codeCpp, body.problemId);
      return data;
    } catch (error) {
      return error;
    }
  }
}
