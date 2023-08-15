import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoCreds } from './config/mongo';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot(mongoCreds.SECRET_KEY), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
