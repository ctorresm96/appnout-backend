import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetail } from '../user-detail/entities/user-detail.entity';
import { LoginUserDto } from './dto/login-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(UserDetail)
    private userDetailRepo: Repository<UserDetail>,
  ) {}

  async create(createUserDto: CreateUserDto) {
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

  async findOne(id: string): Promise<User> {
    return await this.userRepo.findOne(id, { relations: ['notes'] });
  }

  async findOneByUsername(username: string): Promise<any> {
    return await this.userRepo
      .createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .getOne();
  }

  async findAllNotesById(id: string): Promise<User> {
    const notes = await this.userRepo.findOne(id, { relations: ['notes'] });
    if (!notes) throw new HttpException('El usuario no existe', 404);
    return notes;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
