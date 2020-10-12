import { IsNotEmpty } from 'class-validator';

// Data transfer object
export class CreateCategoryDTO {
	@IsNotEmpty()
	name: string;
	slug: string;
}

export class UpdateCategoryDTO {
	@IsNotEmpty()
	name: string;
}
