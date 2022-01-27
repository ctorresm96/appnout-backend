import { Note } from 'src/entities/note/entities/note.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'TBL_BOARD' })
export class Board {
  @PrimaryGeneratedColumn()
  id: string;

  //   @OneToMany(() => Note, (note) => note.user)
  //   notes: Note[];

  @Column({ default: 1 })
  status: number;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ nullable: true })
  img: string;

  @Column()
  name: string;

  @Column()
  created_by: number;
}
