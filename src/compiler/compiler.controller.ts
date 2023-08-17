import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompilerService } from './compiler.service';
import { CreateCompilerDto } from './dto/create-compiler.dto';
import { UpdateCompilerDto } from './dto/update-compiler.dto';

@Controller('compiler')
export class CompilerController {
  constructor(private readonly compilerService: CompilerService) {}

  @Post()
  create(@Body() createCompilerDto: CreateCompilerDto) {
    return this.compilerService.create(createCompilerDto);
  }

  @Get()
  findAll() {
    return this.compilerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compilerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompilerDto: UpdateCompilerDto) {
    return this.compilerService.update(+id, updateCompilerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compilerService.remove(+id);
  }
}
