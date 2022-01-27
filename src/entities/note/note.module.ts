import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Note } from './entities/note.entity';
import { UserService } from '../user/user.service';
import { UserDetailService } from '../user-detail/user-detail.service';
import { UserDetail } from '../user-detail/entities/user-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Note, UserDetail])],
  controllers: [NoteController],
  providers: [NoteService, UserService, UserDetailService],
})
export class NoteModule {}
