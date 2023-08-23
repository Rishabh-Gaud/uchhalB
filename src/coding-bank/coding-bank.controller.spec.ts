import { Test, TestingModule } from '@nestjs/testing';
import { CodingBankController } from './coding-bank.controller';
import { CodingBankService } from './coding-bank.service';

describe('CodingBankController', () => {
  let controller: CodingBankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodingBankController],
      providers: [CodingBankService],
    }).compile();

    controller = module.get<CodingBankController>(CodingBankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
