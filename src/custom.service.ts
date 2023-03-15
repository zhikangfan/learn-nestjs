import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomService {
  getHello(): string {
    return 'custom Hello World!';
  }
  getAbc(): string {
    return 'custom';
  }
}
