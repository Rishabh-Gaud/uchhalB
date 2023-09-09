import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CodingBankModule } from './coding-bank/coding-bank.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { CompilerModule } from './compiler/compiler.module';
import { McqModule } from './mcq/mcq.module';
import { TestModule } from './test/test.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://thegreatoffer:omqk7uFocpZQkhst@cluster0.6vhl28n.mongodb.net/"),
    UserModule,
    CodingBankModule,
    CompilerModule,
    McqModule,
    TestModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
