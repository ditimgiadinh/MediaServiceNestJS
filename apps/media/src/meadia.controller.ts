import { Controller, Get } from '@nestjs/common';
import { MeadiaService } from './meadia.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MeadiaController {
  constructor(private readonly meadiaService: MeadiaService) {}

    @MessagePattern('service.ping')
    ping(){
        return this.meadiaService.ping;
    }
  
}
