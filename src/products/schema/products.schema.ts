import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Products{
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);