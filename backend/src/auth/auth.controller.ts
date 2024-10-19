import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { signupDto } from './dtos/singup.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService, 
    private userService: UsersService
    ) {}

  @Post('signup')
  async signup(@Body() signupDto: signupDto) {
    const user = await this.userService.create(signupDto);//회원가입 기능 호출
    return {
      message: '회원가입이 성공되었습니다',
      userId: user.id,
    }//추후에 에러 처러
  }
}
