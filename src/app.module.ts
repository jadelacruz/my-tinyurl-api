import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CatController } from './controllers/cat.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService],
})
export class AppModule {}
