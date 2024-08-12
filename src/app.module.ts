import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_CLIENT',
        transport: Transport.NATS,
        options: {
          debug: true,
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
