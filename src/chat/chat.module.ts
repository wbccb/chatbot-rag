import { Module } from "@nestjs/common";
import { ChatController } from "./chat.controller";
import { ChatService } from "./chat.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatItemEntity } from "./entites/chat-item.entity";
import { StreamModule } from "../stream/stream.module";
@Module({
  imports: [TypeOrmModule.forFeature([ChatItemEntity]), StreamModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
