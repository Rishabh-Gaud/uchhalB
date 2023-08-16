import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoCreds } from './config/mongo';
import { UserModule } from './user/user.module';
import { CodingBankModule } from './coding-bank/coding-bank.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongoCreds.SECRET_KEY),
    UserModule,
    CodingBankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
