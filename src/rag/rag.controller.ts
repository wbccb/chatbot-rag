import { Controller, Get } from '@nestjs/common';
import { RagService } from './rag.service';

@Controller()
export class RagController {
  constructor(private readonly appService: RagService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
