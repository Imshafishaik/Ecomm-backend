import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsDto } from "./dto/products.dto";

@Controller('/api')
export class ProductsController {
    constructor(private readonly productsService:ProductsService){}

    @Get('products')
    getAllProducts(){
        return this.productsService.getAllProducts();
    }

    // @Post('product')
    // postProduct(@Body() postProductData: ProductsDto){
    //     return this.productsService.postProduct(postProductData)
    // }

    @Post('subcategory-mapped-product')
    postSubcategoryMappedProduct(@Body() postMappedProductData: ProductsDto){
        return this.productsService.postProduct(postMappedProductData)
    }
}