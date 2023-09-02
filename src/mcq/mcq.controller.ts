import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { McqService } from './mcq.service';
import { CreateMcqDto } from './dto/create-mcq.dto';
import { UpdateMcqDto } from './dto/update-mcq.dto';

@Controller('mcq')
export class McqController {
  constructor(private readonly mcqService: McqService) { }

  @Post()
  async create(@Body() data: any) {
    try {
      const createProblem = await this.mcqService.create(
        data.data, data.key,
      );
      return { statusCode: 201, isSuccess: true, data: createProblem };
    } catch (error) {
      console.log('[SERVER ERROR][MCQController:create]: ', error);
      return { statusCode: 500, isSuccess: false, error };
    }
  }

  @Post('fetch-topic')
  async fetchTopicProblem(@Body() body: {subject: string, category: string}) {
    try {
      const createProblem = await this.mcqService.fetchTopicProblem(
        body.subject, body.category
      );
      return { statusCode: 201, isSuccess: true, data: createProblem };
    } catch (error) {
      console.log('[SERVER ERROR][MCQController:fetchTopicProblem]: ', error);
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

  @Post("/topics")
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
