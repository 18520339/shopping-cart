import {
	Body,
	Controller,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';
import { CategoryService } from './category.service';

@Controller('/categories')
export class CategoryController {
	constructor(private categoryService: CategoryService) {}

	@Get('/:id/examples')
	examples(@Param() param, @Param('id') id, @Query() query) {
		console.log(param, id, query);
		return { message: 'This is an example' };
	}

	@Get()
	getCategories() {
		return this.categoryService.getCategories();
	}

	@Get('/:id')
	getCategoryById(@Param('id') id) {
		return this.categoryService.getCategoryById(id);
	}

	@Post()
	createCategory(@Body() data: CreateCategoryDTO) {
		return this.categoryService.createCategory(data);
	}

	@Patch('/:id')
	updateCategoryById(@Param('id') id, @Body() data: UpdateCategoryDTO) {
		return this.categoryService.updateCategoryById(id, data);
	}
}
