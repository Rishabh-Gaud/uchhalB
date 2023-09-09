import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job,JobDocument } from './entities/job.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}


  create(createJobDto: CreateJobDto) {
    const job =  this.jobModel.create(createJobDto)
    return  job;
  }

  findAll() {
    return this.jobModel.find().exec();
  }

  findOne(id: string) {
    return this.jobModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
