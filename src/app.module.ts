import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DungeonsModule } from './dungeons/dungeons.module';
import { LoggerMiddleware } from './shared/infraestructure/middleware/logger.middleware';
import { GodsModule } from './gods/gods.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DungeonsModule, GodsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
