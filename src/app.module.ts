import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoCreds } from './config/mongo';
import { UserModule } from './user/user.module';
import { CodingBankModule } from './coding-bank/coding-bank.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

@Module({
  imports: [
    MongooseModule.forRoot(mongoCreds.SECRET_KEY),
    UserModule,
    CodingBankModule,
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
