import { Module } from '@nestjs/common';
import { CodingBankService } from './coding-bank.service';
import { CodingBankController } from './coding-bank.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CodingBank, CodingBankSchema } from './entities/coding-bank.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CodingBank.name, schema: CodingBankSchema },
    ]),
  ],
  controllers: [CodingBankController],
  providers: [CodingBankService],
})
export class CodingBankModule {}
