import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,SchemaTypes, ObjectId } from 'mongoose';


@Schema()
export class Category{
    _id: ObjectId;

    @Prop({reqquired: true})
    name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

// CategorySchema.virtual('subCategory',{
//     ref: 'SubCategory',
//     localField: '_id',
//     foreignField: '_id',
//     justOne: false,
// })
