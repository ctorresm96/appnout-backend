import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { UserDetail } from '../user-detail/entities/user-detail.entity';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { UserDetailService } from '../user-detail/user-detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Board, User, UserDetail])],
  controllers: [BoardController],
  providers: [BoardService, UserService, UserDetailService],
})
export class BoardModule {}
