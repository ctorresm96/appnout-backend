import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteController } from '../note/note.controller';
import { NoteService } from '../note/note.service';
import { UserRepository } from './user.repository';
import { UserDetailRepository } from '../user-detail/user-detail.repository';
import { UserDetailController } from '../user-detail/user-detail.controller';
import { NoteRepository } from '../note/note.repository';
import { UserDetailService } from '../user-detail/user-detail.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    TypeOrmModule.forFeature([UserDetailRepository]),
    TypeOrmModule.forFeature([NoteRepository]),
  ],
  controllers: [UserController, UserDetailController, NoteController],
  providers: [UserService, NoteService, UserDetailService],
})
export class UserModule {}
