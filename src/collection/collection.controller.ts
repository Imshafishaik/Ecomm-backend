import { Body, Controller, Get, Post } from "@nestjs/common";
import { CollectionService } from "./collection.service";
import { ProductsDto } from "./dto/collection.dto";

@Controller('/api')
export class ProductsController {
    constructor(private readonly collectionService:CollectionService){}

    @Get('products')
    getAllProducts(){
        return this.collectionService.getAllProducts();
    }

    @Post('product')
    postProduct(@Body() postProductData: ProductsDto){
        return this.collectionService.postProduct(postProductData)
    }

}