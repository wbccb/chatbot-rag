// stream.module.ts
import { Module } from "@nestjs/common";
import { StreamService } from "./stream.service";
import { StreamInterceptor } from "./stream.interceptor";

@Module({
  providers: [StreamService, StreamInterceptor],
  exports: [StreamService, StreamInterceptor], // 导出服务和拦截器
})
export class StreamModule {}
