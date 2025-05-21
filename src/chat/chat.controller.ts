import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from "@nestjs/swagger";
import { CreateChatItemDto } from "./dto/create-chat-item-dto";
import { Response } from "express";

@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post("/chat")
  @ApiOperation({ summary: "用户聊天处理入口" })
  @ApiResponse({ status: 200, description: "创建成功" })
  getChatAnswer(@Body() body: CreateChatItemDto & { message: { content: string }; stream: boolean }, @Res() res: Response) {
    const { message, stream } = body;

    if (!stream) {
      return res.status(400).json({ error: "Only streaming is supported" });
    }

    // 设置流式响应头
    res.header("Content-Type", "text/event-stream");
    res.header("Cache-Control", "no-cache");

    // 模拟模型推理
    const content = message.content;
    this.chatService.getChatAnswer(body).then((chunks) => {
      for (const chunk of chunks) {
        res.write(`data: {"choices":[{"delta":{"reasoning_content":"${chunk}"}}]}\n\n`);
      }

      res.end();
    });
  }
}
