import { Injectable } from '@nestjs/common';

@Injectable()
export class LLMService {
  getHello(): string {
    return 'Hello World!';
  }
}
