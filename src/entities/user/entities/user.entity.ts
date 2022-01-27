import { Note } from 'src/entities/note/entities/note.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'TBL_USER' })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ name: 'created_at' })
  createdAt?: Date;
}
