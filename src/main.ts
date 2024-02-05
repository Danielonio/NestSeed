import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ErrorFilter } from './shared/infraestructure/filter/error.filter';
import { CustomLogger } from './shared/infraestructure/logging/custom.logger';
import { ContextService } from './shared/infraestructure/logging/context.service';
import * as ContextStore from 'request-context';
import { inputValidationPipe } from './shared/infraestructure/pipes/input.validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });

  app.useGlobalFilters(new ErrorFilter());
  app.useGlobalPipes(inputValidationPipe);

  const config = new DocumentBuilder()
    .setTitle('Nest Seed')
    .setDescription('The Nest Seed API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(ContextStore.middleware('request'));
  app.use(ContextService.middleware);

  await app.listen(3000);
}
bootstrap();
