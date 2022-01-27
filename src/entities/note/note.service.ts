import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { NoteRepository } from './note.repository';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteRepository) private noteRepo: NoteRepository,
    @InjectRepository(UserRepository) private userRepo: UserRepository,
  ) {}

  async create(createNoteDto: CreateNoteDto, user: User) {
    const note = new Note();
    note.description = createNoteDto.description;
    await this.noteRepo.save(note);

    user.notes = [note, ...user.notes];
    this.userRepo.save(user)

    return 'This action adds a new note';
  }

  findAll() {
    return `This action returns all note`;
  }

  findOne(id: string) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
