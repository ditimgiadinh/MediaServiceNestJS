import { Injectable } from '@nestjs/common';

@Injectable()
export class MeadiaService {
  ping() {
  return {
    ok: true,
    service: 'media',
    now: new Date().toISOString()
  };
}
}
