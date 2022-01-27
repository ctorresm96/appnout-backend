import { User } from 'src/entities/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TBL_NOTE' })
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.notes)
  user: User;

  @Column({ default: new Date() })
  created_date: Date;

  @Column({ nullable: true })
  description: string;

  @Column({ default: true })
  status: boolean;
}
