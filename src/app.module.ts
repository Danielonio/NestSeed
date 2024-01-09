import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DungeonsModule } from './dungeons/dungeons.module';
import { LoggerMiddleware } from './shared/infraestructure/middleware/logger.middleware';

@Module({
  imports: [DungeonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
