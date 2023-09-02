import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompilerService } from './compiler.service';
import { CreateCompilerDto } from './dto/create-compiler.dto';
import { UpdateCompilerDto } from './dto/update-compiler.dto';

@Controller('compiler')
export class CompilerController {
  constructor(private readonly compilerService: CompilerService) { }

  @Post()
  async create(@Body() body: { codeCpp: string, problemId:string, examples:any }) {
    try {
      const data = await this.compilerService.executeCode(body.codeCpp, body.problemId, body.examples);
      return data;
    } catch (error) {
      return error;
    }
  }

  @Post('submit')
  async submitted(@Body() body: { codeCpp: string, problemId:string, examples:any }) {
    try {
      const data = await this.compilerService.submittedcode(body.codeCpp, body.problemId, body.examples);
      return data;
    } catch (error) {
      return error;
    }
  }
}
