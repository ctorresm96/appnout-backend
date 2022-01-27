import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteRepository } from './note.repository';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { UserDetailRepository } from '../user-detail/user-detail.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    TypeOrmModule.forFeature([UserDetailRepository]),
    TypeOrmModule.forFeature([NoteRepository]),
  ],
  controllers: [UserController, NoteController],
  providers: [UserService, NoteService],
})
export class NoteModule {}
