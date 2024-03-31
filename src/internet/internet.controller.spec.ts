import { Test, TestingModule } from '@nestjs/testing';
import { InternetController } from './internet.controller';

describe('InternetController', () => {
  let controller: InternetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternetController],
    }).compile();

    controller = module.get<InternetController>(InternetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
