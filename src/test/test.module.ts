import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestSchema } from './entities/test.entity';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Test.name, schema: TestSchema }
  ])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule { }
