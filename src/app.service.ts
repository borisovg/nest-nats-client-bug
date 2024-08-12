import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as wtf from 'wtfnode';

@Injectable()
export class AppService {
  constructor(
    @Inject('NATS_CLIENT')
    private client: ClientProxy,
  ) {
    Array.from({ length: 2 }, () => client.emit('test-message', {}));
    setTimeout(() => this.close(), 1000);
  }

  private async close() {
    await this.client.close();
    wtf.dump();
    console.log('SHOULD EXIT');
  }
}
