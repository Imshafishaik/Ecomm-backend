import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { SchemaTypes,Document, ObjectId } from 'mongoose';
import { Category } from "./category.schema";

@Schema()
export class SubCategory{
    
    
    @Prop({type: SchemaTypes.ObjectId, ref: Category.name,required: true})
    name: string;

}
// console.log("..............SchemaTypes",SchemaTypes.ObjectID)

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);