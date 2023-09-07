import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuffModule } from './stuff/stuff.module';
import { CategoriesModule } from './categories/categories.module';
import { SharedModule } from './shared/shared.module';
import { FirebaseService } from './auth/firebase/firebase.service';

@Module({
  imports: [StuffModule, CategoriesModule, SharedModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
