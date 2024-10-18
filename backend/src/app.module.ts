// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 환경 변수를 전역에서 사용 가능하게 설정
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, 
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_DATABASE, 
      entities: [User, Location],
      synchronize: true, // 개발 환경에서만 true로 설정. 프로덕션에서는 마이그레이션을 사용하세요.
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
