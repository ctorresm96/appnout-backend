import { User } from 'src/entities/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'TBL_USER_DETAIL' })
export class UserDetail {
  @PrimaryGeneratedColumn({ zerofill: true })
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  birth_day: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  photo: string;
}
