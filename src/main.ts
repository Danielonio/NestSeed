import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ErrorFilter } from './shared/infraestructure/filter/error.filter';
import { CustomLogger } from './shared/infraestructure/logging/custom.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });

  app.useGlobalFilters(new ErrorFilter());

  const config = new DocumentBuilder()
    .setTitle('Nest Seed')
    .setDescription('The Nest Seed API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
