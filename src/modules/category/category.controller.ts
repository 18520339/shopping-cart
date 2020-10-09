import { Controller, Get } from '@nestjs/common';

@Controller('/categories')
export class CategoryController {
	@Get()
	getCategories() {
		return [
			{ id: 1, name: 'Laptop' },
			{ id: 2, name: 'PC' },
		];
	}
}
