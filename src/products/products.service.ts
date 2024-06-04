import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Products } from "./schema/products.schema";
import { Model } from "mongoose";
import { ProductsDto } from "./dto/products.dto";
import { SubCategory } from "../categories/schema/subcategory.schema";


@Injectable()
export class ProductsService{
    constructor(@InjectModel(Products.name) private readonly productsModel: Model<Products>,
    @InjectModel(SubCategory.name) private readonly subCategoryModel: Model<SubCategory>
    ){}

    async getAllProducts(){
        let productsData = await this.productsModel.find()
        return {data: productsData}
    }

    async postProduct({subcategoryId, ...postMappedProductData}: ProductsDto){
        const findSubcategory = await this.subCategoryModel.findById(subcategoryId)
        let productedPosted =  new this.productsModel(postMappedProductData)  
        const savedProduct = await productedPosted.save()
        const updatedProduct = await findSubcategory.updateOne({$push:{
            products: savedProduct._id,
        }})
        return updatedProduct;
    }
}