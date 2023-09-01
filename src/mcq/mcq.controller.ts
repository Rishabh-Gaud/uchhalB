import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { McqService } from './mcq.service';
import { CreateMcqDto } from './dto/create-mcq.dto';
import { UpdateMcqDto } from './dto/update-mcq.dto';

@Controller('mcq')
export class McqController {
  constructor(private readonly mcqService: McqService) { }

  @Post()
  async create(@Body() createMcqDto: CreateMcqDto) {
    try {
      const createProblem = await this.mcqService.create(
        createMcqDto,
      );
      return { statusCode: 201, isSuccess: true, data: createProblem };
    } catch (error) {
      console.log('[SERVER ERROR][MCQController:create]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Post('/mathmcq')
  async createMathMCQ(@Body() createMcqDto: CreateMcqDto) {
    try {
      const createProblem = await this.mcqService.create(
        createMcqDto,
      );
      return { statusCode: 201, isSuccess: true, data: createProblem };
    } catch (error) {
      console.log('[SERVER ERROR][MCQController:create]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Get()
 async findAll() {
    try {
      const data = await this.mcqService.findAll();
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[SERVER ERROR][MCQController:findAll]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Get("/topics")
 async gettopics(@Body() subject: any) {
    try {
      const data = await this.mcqService.gettopics(subject.subject,);
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[SERVER ERROR][MCQController:findAll]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Get('/quiz')
 async quiz() {
    try {
      const data = await this.mcqService.quiz();
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[SERVER ERROR][MCQController:findAll]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.mcqService.findOne(id);
      return { statusCode: 200, isSuccess: true, data };
    } catch (error) {
      console.log('[SERVER ERROR][MCQController:findOne]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMcqDto: UpdateMcqDto) {
    return this.mcqService.update(+id, updateMcqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mcqService.remove(+id);
  }
}
