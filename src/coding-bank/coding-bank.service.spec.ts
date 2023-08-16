import { Test, TestingModule } from '@nestjs/testing';
import { CodingBankService } from './coding-bank.service';

describe('CodingBankService', () => {
  let service: CodingBankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodingBankService],
    }).compile();

    service = module.get<CodingBankService>(CodingBankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
