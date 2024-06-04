import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Products } from "../../products/schema/products.schema";

@Schema()
export class SubCategory{
    
    @Prop({required: true})
    name: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Collection'}]})
    products: Products[]

}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);