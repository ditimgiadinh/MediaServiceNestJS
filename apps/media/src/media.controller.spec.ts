import { Test, TestingModule } from '@nestjs/testing';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

describe('MediaController', () => {
  let MediaController: MediaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MediaController],
      providers: [MediaService],
    }).compile();

    MediaController = app.get<MediaController>(MediaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(MediaController.getHello()).toBe('Hello World!');
    });
  });
});
