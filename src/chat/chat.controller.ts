import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateChatItemDto } from './dto/create-chat-item-dto';

@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('/chat')
  @ApiOperation({ summary: '用户聊天处理入口' })
  @ApiResponse({ status: 200, description: '创建成功' })
  getChatAnswer(@Body() chatItem: CreateChatItemDto) {
    return this.chatService.getChatAnswer(chatItem);
  }
}
