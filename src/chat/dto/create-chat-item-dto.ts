import { ApiProperty } from '@nestjs/swagger';

export class CreateChatItemDto {
  @ApiProperty({ description: '该对话所属的用户Id', example: 'userId1234', required: true })
  userId: string;

  @ApiProperty({ description: '该聊天信息所属的对话', example: 'userId1234', required: true })
  conversionId: string;

  @ApiProperty({ description: '内容', example: 'userId1234', required: true })
  content: string;

  @ApiProperty({ description: '类型', example: 'userId1234', required: false })
  type: string;
}
