import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "../schema/category.schema";
import { CategoryDto } from "../dto/category.dto";


@Injectable()
export class CatergoryService{
    constructor(@InjectModel(Category.name) private readonly CategoryModel: Model<Category>){}

    async getAllMainCategory(){
        const categoryData = await this.CategoryModel.find();
        return {
            data: categoryData
        };
    }

    postAddCategory(categoryDto: CategoryDto){
        const categoryData = new this.CategoryModel(categoryDto).save()
        return "Category Posted Successfully";
    }
}