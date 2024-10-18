import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    ConfigModule,
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    //PassportModule의 기본 설정을 jwt로 지정
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        secret: ConfigService.get('JWT_SECRET'),
        signOptions: { expiresIn: ConfigService.get<string>('JWT_EXPIRATION_TIME') },
      }),
      inject: [ConfigService],
    }),//JWT 모듈을 사용하기 위해서 설정
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
