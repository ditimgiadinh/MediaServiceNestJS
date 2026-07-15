import { Injectable } from '@nestjs/common';

@Injectable()
export class MeadiaService {
  getHello(): string {
    return 'Hello World!';
  }
}
