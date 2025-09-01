import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!2';
  }

  nganu(): string {
    return 'ula';
  }
}
