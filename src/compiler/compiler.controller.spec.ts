import { Test, TestingModule } from '@nestjs/testing';
import { CompilerController } from './compiler.controller';
import { CompilerService } from './compiler.service';

describe('CompilerController', () => {
  let controller: CompilerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompilerController],
      providers: [CompilerService],
    }).compile();

    controller = module.get<CompilerController>(CompilerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
