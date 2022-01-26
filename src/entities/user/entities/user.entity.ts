import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TBL_USER' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ name: 'created_at' })
  createdAt?: Date;
}
