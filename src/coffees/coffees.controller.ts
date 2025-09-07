import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors') // GET /coffees/flavors
  findAllFlavors(): string {
    return 'This action returns all coffee flavors';
  }
}
