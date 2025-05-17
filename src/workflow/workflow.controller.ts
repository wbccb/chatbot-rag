import { Controller, Get } from '@nestjs/common';
import { WorkflowService } from './workflow.service';

@Controller()
export class WorkflowController {
  constructor(private readonly appService: WorkflowService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
