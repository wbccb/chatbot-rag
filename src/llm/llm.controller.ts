import { Controller, Get } from '@nestjs/common';
import { LLMService } from './llm.service';

@Controller()
export class LLMController {
  constructor(private readonly appService: LLMService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
