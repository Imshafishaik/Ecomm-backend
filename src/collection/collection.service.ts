import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Collection } from "./schema/collection.schema";
import { Model } from "mongoose";
import { ProductsDto } from "./dto/collection.dto";


@Injectable()
export class CollectionService{
    constructor(@InjectModel(Collection.name) private readonly collectionModel: Model<Collection>){}

    async getAllProducts(){
        let productsData = await this.collectionModel.find()
        return {data: productsData}
    }

    postProduct(postProductData: ProductsDto){
        console.log("...............postProductData",postProductData)
        let productedPosted =  new this.collectionModel(postProductData)
        productedPosted.save()
        return "Data Posted Successfully";
    }   

    
}