import { Controller, Get } from '@nestjs/common';
import { CustomService } from './custom.service';

@Controller('/custom')
export class CustomController {
  constructor(private readonly appService: CustomService) {}

  @Get('/t')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/a')
  abc(): string {
    return this.appService.getAbc();
  }
}
