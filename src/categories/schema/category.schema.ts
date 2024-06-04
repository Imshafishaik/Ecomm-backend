import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document,SchemaTypes, ObjectId } from 'mongoose';
import { SubCategory } from "./subcategory.schema";


@Schema()
export class Category{
    @Prop({required: true})
    name: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }]})
    subcategories: SubCategory[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
