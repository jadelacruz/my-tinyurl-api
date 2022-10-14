import { Controller, Get, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  create(): string {
    return 'This action creates a cat';
  }
}
