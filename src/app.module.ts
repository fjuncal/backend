import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuffModule } from './stuff/stuff.module';
import { CategoriesModule } from './categories/categories.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [StuffModule, CategoriesModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
