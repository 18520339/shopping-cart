import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as _ from 'lodash';
import { clearAccents } from 'src/utils/handleString';

export type CategoryDocument = Category & Document;
@Schema({ timestamps: true }) // class decorator
export class Category {
	@Prop()
	name: string;
	@Prop()
	slug: string;
}

const CategorySchema = SchemaFactory.createForClass(Category);
CategorySchema.pre('save', function() {
	// const cate: any = this;
	// cate.slug = clearAccents(cate.name)
	// 	.toLowerCase()
	// 	.split(' ')
	// 	.join('-');

	_.get(this, 'name');
	const slug = _.chain(this)
		.get('name')
		.thru(name => clearAccents(name))
		.toLower()
		.split(' ')
		.concat(Date.now())
		.join('-')
		.value();
	_.set(this, 'slug', slug);
});
export { CategorySchema };
