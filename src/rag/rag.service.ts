import { Injectable } from '@nestjs/common';

@Injectable()
export class RagService {
  getHello(): string {
    return 'Hello World!';
  }
}
