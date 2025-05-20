import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: './docker/.env' }), // 全局加载 .env 文件
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_HOST'), // 从 .env 读取 MYSQL_HOST=mysql
        port: 5455, // 容器内部 MySQL 端口始终是 3306（即使宿主机映射到 5455）
        username: 'root', // MySQL root 用户
        password: configService.get('MYSQL_PASSWORD'), // 从 .env 读取 MYSQL_PASSWORD=infini_rag_flow
        database: configService.get('MYSQL_DBNAME'), // 从 .env 读取 MYSQL_DBNAME=rag_flow
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // 开发环境可启用，生产环境建议关闭
        logging: true,
      }),
    }),
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
