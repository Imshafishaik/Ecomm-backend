import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SubCategory } from "../schema/subcategory.schema";
import { Model } from "mongoose";
import { SubCategoryDto } from "../dto/category.dto";


@Injectable()
export class SubCategoryService {
    constructor(@InjectModel(SubCategory.name) private readonly subCategoryModel: Model<SubCategory> ){}
    async getAllSubCategory(){
        const subCategoryData = await this.subCategoryModel.find()
        return {data: subCategoryData}
    }

    postAddSubCategory(subCategoryDto: SubCategoryDto){
        console.log("...........subCategoryDto",subCategoryDto)
        const subCategoryData = new this.subCategoryModel(subCategoryDto).save()
        return "Data Posted Successfully"
    }
}