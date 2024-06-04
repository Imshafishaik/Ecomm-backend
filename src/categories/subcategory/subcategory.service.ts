import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SubCategory } from "../schema/subcategory.schema";
import { Model } from "mongoose";
import { SubCategoryDto } from "../dto/category.dto";
import { Category } from "../schema/category.schema";


@Injectable()
export class SubCategoryService {
    constructor(
        @InjectModel(SubCategory.name) private readonly subCategoryModel: Model<SubCategory>,
        @InjectModel(Category.name) private readonly categoryModel: Model<Category> ){}
    async getAllSubCategory(){
        const subCategoryData = await this.subCategoryModel.find()
        return {data: subCategoryData}
    }

    async postAddSubCategory({categoryId,...subCategoryDto}: SubCategoryDto){
        const findCategory = await this.categoryModel.findById(categoryId)
        if(!findCategory){
            throw new HttpException('User not found', 404)
        }
        const subCategoryData = new this.subCategoryModel(subCategoryDto);
        const savedSubCategory = await subCategoryData.save()
        const updatedCategory = await findCategory.updateOne({$push:{
            subcategories: savedSubCategory._id,
        }})
        return savedSubCategory;
    }
}