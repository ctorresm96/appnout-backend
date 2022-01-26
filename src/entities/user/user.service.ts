import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetail } from '../user-detail/entities/user-detail.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(UserDetail)
    private userDetailRepo: Repository<UserDetail>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);

    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.createdAt = new Date();
    await this.userRepo.save(user);

    const userDetail = new UserDetail();
    userDetail.first_name = createUserDto.first_name;
    userDetail.last_name = createUserDto.last_name;
    userDetail.bio = createUserDto.bio;
    userDetail.user = user;
    await this.userDetailRepo.save(userDetail);

    return `Usuario creado correctamente`;
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findOne(id: number) {}

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
