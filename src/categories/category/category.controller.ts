import { Controller, Get, Post,Body } from "@nestjs/common";
import { CatergoryService } from "./category.service";
import { CategoryDto } from "../dto/category.dto";


@Controller('category')
export class CategoryController{
    constructor(private readonly categoryService: CatergoryService){}

    @Get('main-category')
    getAllMainCategory(){
        return this.categoryService.getAllMainCategory();
    }

    @Post('add-category')
    postAddCategory(@Body() categoryDto: CategoryDto){
        return this.categoryService.postAddCategory(categoryDto);
    }
}