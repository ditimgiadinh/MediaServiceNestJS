import { Module } from '@nestjs/common';
import { MeadiaController } from './meadia.controller';
import { MeadiaService } from './meadia.service';

@Module({
  imports: [],
  controllers: [MeadiaController],
  providers: [MeadiaService],
})
export class MeadiaModule {}
