import { Test, TestingModule } from '@nestjs/testing';
import { MeadiaController } from './meadia.controller';
import { MeadiaService } from './meadia.service';

describe('MeadiaController', () => {
  let meadiaController: MeadiaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MeadiaController],
      providers: [MeadiaService],
    }).compile();

    meadiaController = app.get<MeadiaController>(MeadiaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(meadiaController.getHello()).toBe('Hello World!');
    });
  });
});
