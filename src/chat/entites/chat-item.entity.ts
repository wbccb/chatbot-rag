import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/base';

@Entity('conversation', {
  comment: '会话表',
})
export class ChatItemEntity extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    name: 'user_id',
    comment: '用户ID',
  })
  public userId: string;

  @Column({
    type: 'varchar',
    name: 'conversation_id',
    length: 20,
    comment: '该聊天信息所属的对话',
  })
  public conversationId: string;

  @Column({
    type: 'text',
    name: 'content',
    comment: '内容',
  })
  public content: string;

  @Column({
    type: 'varchar',
    name: 'type',
    length: 50,
    comment: '类型',
  })
  public type: string;
}
