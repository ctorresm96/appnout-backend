import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './entities/user/user.module';
import { UserDetailModule } from './entities/user-detail/user-detail.module';
import { NoteModule } from './entities/note/note.module';
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
  ]
})
export class AppModule {}
