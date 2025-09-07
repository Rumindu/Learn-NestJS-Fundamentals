import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors') // GET /coffees/flavors
  findAllFlavors(): string {
    return 'This action returns all coffee flavors';
  }
  @Get(':id') // Dynamic route parameter
  findOne(@Param('id') id: string): string {
    return `This action returns coffee #${id}`;
  }
  @Post()
  create(@Body() body) {
    return body; // Return the entire request body
  }
}
