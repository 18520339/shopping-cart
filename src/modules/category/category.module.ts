import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { Category, CategorySchema } from './category.schema';
import { CategoryService } from './category.service';

// IoC Container (Inversion of Control)
@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Category.name,
				schema: CategorySchema,
			},
		]),
	],
	providers: [CategoryService], // cho class co Injection
	controllers: [CategoryController],
})
export class CategoryModule {}
