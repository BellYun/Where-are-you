import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userId: number): Promise<User> {
    return this.usersService.findOne(userId);//userID를 통해서
  }

  async login(user: User) {
    const payload = { username: user.email, sub: user.id };
    return{
      access_token: this.jwtService.sign(payload),
    }
  }
}
