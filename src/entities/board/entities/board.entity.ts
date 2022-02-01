import { Note } from 'src/entities/note/entities/note.entity';
import { User } from 'src/entities/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'TBL_BOARD' })
export class Board {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'TBL_USER_BOARD',
    joinColumn: { name: 'board_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  users: User[];

  @Column({ default: 1 })
  status: number;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ nullable: true })
  img: string;

  @Column()
  name: string;

  @Column()
  created_by: string;
}
