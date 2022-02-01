import { Board } from 'src/entities/board/entities/board.entity';
import { CategoryType } from 'src/entities/category-type/entities/category-type.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TBL_CATEGORY' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Board, (x) => x.id)
  board: Board;

  @Column({ nullable: false })
  category_type_id: number;

  @Column({ default: new Date() })
  created_date: Date;

  @Column({ nullable: true })
  name: string;

  @Column({ default: true })
  description: string;
}
