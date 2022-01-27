import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { UserService } from '../user/user.service';

@Controller('note')
export class NoteController {
  constructor(
    private readonly noteService: NoteService,
    private userService: UserService
  ) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    const user = await this.userService.findOne(createNoteDto.user_id)
    console.log(user)
    return this.noteService.create(createNoteDto, user);
  }

  @Get()
  findAll() {
    return this.noteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}
