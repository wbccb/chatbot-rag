import { Injectable } from '@nestjs/common';
import { ChatItemEntity } from './entites/chat-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatItemDto } from './dto/create-chat-item-dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatItemEntity)
    private readonly chatItemEntityRepository: Repository<ChatItemEntity>,
  ) {}

  async getChatAnswer(chatItem: CreateChatItemDto) {
    // 1. 存入数据库中

    await this.chatItemEntityRepository.save(chatItem);

    const { content } = chatItem;
    const answer = this.getStreamAnswer(content, false, false);

    // 2. 经过查询得到答案，存入数据库中并返回
    return answer;
  }

  getStreamAnswer(question: string, enable_web_search: boolean, modelChoice: any) {
    return '回答你了';
  }
}
