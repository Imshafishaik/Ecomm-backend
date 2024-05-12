import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Collection{
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);