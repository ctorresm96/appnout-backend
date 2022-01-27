import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './entities/user/user.module';
import { UserDetailModule } from './entities/user-detail/user-detail.module';
import { NoteModule } from './entities/note/note.module';
import { BoardModule } from './entities/board/board.module';
import { CategoryModule } from './entities/category/category.module';
import { CategoryTypeModule } from './entities/category-type/category-type.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    NoteModule,
    UserModule,
    UserDetailModule,
    BoardModule,
    CategoryModule,
    CategoryTypeModule,
  ]
})
export class AppModule {}
