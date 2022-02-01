import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
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
    private categoryService: CategoryService,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const user = await this.userService.findAllNotesById(createNoteDto.user_id);
    const category = await this.categoryService.findOne(createNoteDto.category_id)

    const note = new Note();
    note.description = createNoteDto.description;
    note.category_id = category.id;
    await this.noteRepo.save(note);

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
