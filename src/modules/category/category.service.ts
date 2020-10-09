import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';

@Injectable() // de co the inject vao class khac
export class CategoryService {
	constructor(
		@InjectModel(Category.name)
		private categoryModel: Model<CategoryDocument>,
	) {}
}
