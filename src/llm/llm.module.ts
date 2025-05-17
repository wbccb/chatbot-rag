import { Module } from '@nestjs/common';
import { LLMController } from './llm.controller';
import { LLMService } from './llm.service';

@Module({
  imports: [],
  controllers: [LLMController],
  providers: [LLMService],
})
export class LLMModule {}
