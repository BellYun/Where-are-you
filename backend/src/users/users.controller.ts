import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  create() {
    return 'This action adds a new user';
  }
  //컨트롤러를 통해서 사용자를 추가 하는 기능을 구현
}
