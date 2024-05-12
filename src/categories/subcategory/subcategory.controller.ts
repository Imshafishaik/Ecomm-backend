import { Body, Controller, Get, Post } from "@nestjs/common";
import { SubCategoryService } from "./subcategory.service";
import { SubCategoryDto } from "../dto/category.dto";


@Controller('subcategory')
export class SubCategoryController{
    constructor(private readonly subCategoryService: SubCategoryService){}

    @Get('/sub-category')
    getAllSubCategory(){
        return this.subCategoryService.getAllSubCategory();
    }

    @Post('/add-sub-category')
    postAddSubCategory(@Body() subCategoryDto: SubCategoryDto){
        return this.subCategoryService.postAddSubCategory(subCategoryDto);
    }
}