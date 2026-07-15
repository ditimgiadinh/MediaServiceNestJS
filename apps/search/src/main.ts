import { NestFactory } from '@nestjs/core';
import { SearchModule } from './search.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  process.title = 'search'
  const looger = new Logger('SearchBoostrap');
  //const port = Number(process.env.SEARCH_TCP_PORT ?? 4013);
  
  const rmqUrl = process.env.RABBITMQ_URL ?? "amqp://localhost:5672";

  const queue = process.env.SEARCH_QUEUE ?? 'search_queue';

  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      SearchModule,{
        transport : Transport.RMQ,
      options : {
          urls : [rmqUrl],
          queue,
          queueOptions : {
            durable : false
          }
      }
      }
  );
  await app.listen();
  looger.log(`Search RMQ listening on queue ${queue} via  ${rmqUrl}`)
}
bootstrap();
