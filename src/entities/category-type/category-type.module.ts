import { Module } from '@nestjs/common';
import { CategoryTypeService } from './category-type.service';
import { CategoryTypeController } from './category-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryType } from './entities/category-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryType])],
  controllers: [CategoryTypeController],
  providers: [CategoryTypeService],
})
export class CategoryTypeModule {}
