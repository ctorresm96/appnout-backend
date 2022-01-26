import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'TBL_CAT'})
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  aniosgatunos: number;
}