import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomController } from './custom.controller';
import { AppService } from './app.service';
import { CustomService } from './custom.service';

@Module({
  imports: [],
  controllers: [AppController, CustomController],
  providers: [AppService, CustomService],
})
export class AppModule {}
