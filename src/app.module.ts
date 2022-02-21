import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './entities/user/user.module';
import { UserDetailModule } from './entities/user-detail/user-detail.module';
import { NoteModule } from './entities/note/note.module';
import { BoardModule } from './entities/board/board.module';
import { CategoryModule } from './entities/category/category.module';
import { CategoryTypeModule } from './entities/category-type/category-type.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { configService } from './ormconfig';
@Module({
  imports: [
    TypeOrmModule.forRoot({ ...configService.getTypeOrmConfig() }),
    NoteModule,
    UserModule,
    UserDetailModule,
    BoardModule,
    CategoryModule,
    CategoryTypeModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
