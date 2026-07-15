import { NestFactory } from '@nestjs/core';
import { MeadiaModule } from './meadia.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  process.title = 'meadia';
  const logger = new Logger('MediaBootstrap')
  const port = Number(process.env.MEDIA_TCP_PORT ?? 4012)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MeadiaModule,
    {
      transport : Transport.TCP,
      options : {
          host: '0.0.0.0',
          port,
      }
    }
  )

  app.enableShutdownHooks();
  await app.listen();
  logger.log(`Media microservice (TCP) listening on port ${port}`)
}
bootstrap();
