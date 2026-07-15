import { Controller, Get } from '@nestjs/common';
import { MeadiaService } from './meadia.service';

@Controller()
export class MeadiaController {
  constructor(private readonly meadiaService: MeadiaService) {}

  @Get()
  getHello(): string {
    return this.meadiaService.getHello();
  }
}
