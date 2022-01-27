import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
