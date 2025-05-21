import { Injectable, Res } from "@nestjs/common";
import { ChatItemEntity } from "./entites/chat-item.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateChatItemDto } from "./dto/create-chat-item-dto";
import { BaseResultData } from "../common/base/result";
import { StreamService } from "../stream/stream.service";

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatItemEntity)
    private readonly chatItemEntityRepository: Repository<ChatItemEntity>,
    private readonly streamService: StreamService,
  ) {}

  async getChatAnswer(chatItem: CreateChatItemDto) {
    // 1. 存入数据库中
    // 2. 获取当前的流式回答
  }

  getStreamAnswer(question: string, enable_web_search: boolean, modelChoice: any) {}
}
