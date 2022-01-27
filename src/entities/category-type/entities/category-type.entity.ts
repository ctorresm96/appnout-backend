import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TBL_CATEGORY_TYPE' })
export class CategoryType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  status: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  icon: string;

  @Column({ nullable: true })
  description: string;
}
