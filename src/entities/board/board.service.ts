import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(Board) private boardRepo: Repository<Board>) {}

  async create(createBoardDto: CreateBoardDto) {
    const board = new Board();
    board.img = createBoardDto.img;
    board.name = createBoardDto.name;
    board.created_by = createBoardDto.user_id;

    await this.boardRepo.save(board);
    return 'This action adds a new board';
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
