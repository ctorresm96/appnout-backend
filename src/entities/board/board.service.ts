import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private boardRepo: Repository<Board>,
    private userService: UserService,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const users = await Promise.all(
      createBoardDto.users_id.map(async (id) => {
        return await this.userService.findOne(id);
      }),
    );

    const board = new Board();
    board.img = createBoardDto.img;
    board.name = createBoardDto.name;
    board.created_by = createBoardDto.created_by;
    board.users = [...users];

    await this.boardRepo.save(board);
    return users;
  }

  async findAll() {
    return await this.boardRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
