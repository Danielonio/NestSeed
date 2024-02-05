import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DungeonsModule } from './dungeons/dungeons.module';
import { LoggerMiddleware } from './shared/infraestructure/middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { GodsModule } from './gods/gods.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    DungeonsModule,
    GodsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
