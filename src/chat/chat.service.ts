import { Injectable, Res } from "@nestjs/common";
import { ChatItemEntity } from "./entites/chat-item.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateChatItemDto } from "./dto/create-chat-item-dto";
import { BaseResultData } from "../common/base/result";
import { StreamService } from "../stream/stream.service";
import { isQuestionOrExclamationToken } from "typescript";
import { RagService } from "../rag/rag.service";

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatItemEntity)
    private readonly chatItemEntityRepository: Repository<ChatItemEntity>,
    private readonly streamService: StreamService,
    private readonly ragService: RagService,
  ) {}

  async getChatAnswer(body: CreateChatItemDto & { message: { content: string }; stream: boolean }) {
    // 1. 存入数据库中
    // 2. 获取当前的流式回答

    const { message, stream, ...createChatItemDto } = body;
    const content = message.content;

    const answer = await this.ragService.recursiveRetrieval(content);

    const chunks = ["模拟回答", content, answer];

    return chunks;
  }
}
