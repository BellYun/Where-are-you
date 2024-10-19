import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { signupDto } from 'src/auth/dtos/singup.dto';

@Injectable()
export class UsersService {
  //여기서 비즈니스 로직을 구현
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(signupDto: signupDto): Promise<User> {
    const user = this.usersRepository.create({
      name: signupDto.name,
      email: signupDto.email,
      password: signupDto.password,
      phoneNumber: signupDto.phonenumber
    });
    return this.usersRepository.save(user);
  }

  findOne(id: number): Promise<User|null> {
    return this.usersRepository.findOne({where: {id}});
  }
}
