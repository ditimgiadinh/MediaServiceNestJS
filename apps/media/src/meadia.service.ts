import { Injectable } from '@nestjs/common';

@Injectable()
export class MeadiaService {
  ping() {
  return {
    ok: true,
    service: 'catalog',
    now: new Date().toISOString()
  };
}
}
