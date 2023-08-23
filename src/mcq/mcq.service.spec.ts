import { Test, TestingModule } from '@nestjs/testing';
import { McqService } from './mcq.service';

describe('McqService', () => {
  let service: McqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [McqService],
    }).compile();

    service = module.get<McqService>(McqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
