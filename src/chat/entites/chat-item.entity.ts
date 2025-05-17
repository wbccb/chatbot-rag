import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/base';

@Entity('conversion', {
  comment: '会话表',
})
export class ChatItemEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', name: 'user_id', comment: 'userId' })
  public userId: string;

  @Column({ type: 'varchar', name: 'conversion_id', length: 20, comment: '该聊天信息所属的对话' })
  public conversionId: string;

  @Column({ type: 'text', name: 'content', default: '', length: 11, comment: '内容' })
  public content: string;

  @Column({ type: 'varchar', name: 'type', length: 50, default: '', comment: '类型' })
  public type: string;
}
