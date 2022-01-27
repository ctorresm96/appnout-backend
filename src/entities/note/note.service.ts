import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepo: Repository<Note>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private userService: UserService,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const note = new Note();
    note.description = createNoteDto.description;
    await this.noteRepo.save(note);

    const user = await this.userService.findAllNotesById(createNoteDto.user_id);
    if (!user) throw new HttpException('El usuario no existe', 404);
    const notes = user.notes;
    user.notes = [...notes, note];
    this.userRepo.save(user);
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
