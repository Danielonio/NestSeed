import { Module } from '@nestjs/common';
import { DungeonsModule } from './dungeons/dungeons.module';

@Module({
  imports: [DungeonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
