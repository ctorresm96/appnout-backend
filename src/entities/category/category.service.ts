import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryType } from '../category-type/entities/category-type.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    @InjectRepository(CategoryType)
    private categoryTRepo: Repository<CategoryType>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const categoryType = await this.categoryTRepo.findOne({
      where: { id: createCategoryDto.category_type_id },
    });

    if (!categoryType) throw new HttpException('La categoría no existe', 404);

    const category = new Category();
    category.description = createCategoryDto.description;
    category.name = categoryType.name;
    category.category_type_id = createCategoryDto.category_type_id;

    await this.categoryRepo.save(category);
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
