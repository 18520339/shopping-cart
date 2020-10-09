import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;
@Schema({ timestamps: true }) // class decorator
export class Category {
	@Prop()
	name: string;
	@Prop()
	slug: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
