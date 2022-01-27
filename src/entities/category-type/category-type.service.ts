import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryTypeDto } from './dto/create-category-type.dto';
import { UpdateCategoryTypeDto } from './dto/update-category-type.dto';
import { CategoryType } from './entities/category-type.entity';

@Injectable()
export class CategoryTypeService {
  constructor(
    @InjectRepository(CategoryType)
    private categoryRepo: Repository<CategoryType>,
  ) {}

  async create(createCategoryTypeDto: CreateCategoryTypeDto) {
    const categoryType = new CategoryType();
    categoryType.icon = createCategoryTypeDto.icon;
    categoryType.description = createCategoryTypeDto.description;
    categoryType.name = createCategoryTypeDto.name;
    await this.categoryRepo.save(categoryType);
    return 'This action adds a new categoryType';
  }

  findAll() {
    return `This action returns all categoryType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryType`;
  }

  update(id: number, updateCategoryTypeDto: UpdateCategoryTypeDto) {
    return `This action updates a #${id} categoryType`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryType`;
  }
}
