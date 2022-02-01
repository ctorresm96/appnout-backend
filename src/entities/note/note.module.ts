import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Note } from './entities/note.entity';
import { UserService } from '../user/user.service';
import { UserDetailService } from '../user-detail/user-detail.service';
import { UserDetail } from '../user-detail/entities/user-detail.entity';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/entities/category.entity';
import { CategoryTypeService } from '../category-type/category-type.service';
import { CategoryType } from '../category-type/entities/category-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Note, UserDetail, Category, CategoryType]),
  ],
  controllers: [NoteController],
  providers: [
    NoteService,
    UserService,
    UserDetailService,
    CategoryService,
    CategoryTypeService,
  ],
})
export class NoteModule {}
