import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Hola amiwos';
  }

  @Get('/ruta/')
  nuevo() {
    return 'con /sas/';
  }

  /*  @Get('products/:id')
   getProduct(@Param() params: any) {
     return `product ${params.id}`;
   } */

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and category ${id}`;
  }
}
