import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: ['warn', 'error'],
	});
	const port = process.env.PORT || 5000;
	await app.listen(port, () => {
		console.log('App Information:');
		console.table({
			Port: port,
			Database: 'shopping-cart', // (typeORM, Sequelize, Knext.js, Mongoose)
			Environment: 'Local',
		});
	});
}
bootstrap();
