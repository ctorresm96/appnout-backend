import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryType } from '../category-type/entities/category-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([CategoryType]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
