import { Module } from '@nestjs/common';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controllers';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
})

export class ProductsModule {}