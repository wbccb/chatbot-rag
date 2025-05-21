import { ApiProperty } from '@nestjs/swagger';

export const SUCCESS_CODE = 200;

export class BaseResultData {
  constructor(code = SUCCESS_CODE, msg?: string, data?: any) {
    this.code = code;
    this.msg = msg || '操作成功';
    this.data = data || null;
  }

  @ApiProperty({ type: 'number', default: SUCCESS_CODE })
  code: number;

  @ApiProperty({ type: 'string', default: '操作成功' })
  msg?: string;

  data?: any;

  static ok(data?: any, msg?: string): BaseResultData {
    return new BaseResultData(SUCCESS_CODE, msg, data);
  }

  static fail(code: number, msg?: string, data?: any): BaseResultData {
    return new BaseResultData(code || 500, msg || 'fail', data);
  }
}
