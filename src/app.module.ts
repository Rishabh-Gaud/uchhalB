import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoCreds } from './config/mongo';
import { UserModule } from './user/user.module';
import { CodingBankModule } from './coding-bank/coding-bank.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { CompilerModule } from './compiler/compiler.module';
import { McqModule } from './mcq/mcq.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.SECRET_KEY),
    UserModule,
    CodingBankModule,
    CompilerModule,
    McqModule,
    TestModule,
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
