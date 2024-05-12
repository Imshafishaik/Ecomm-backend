import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Signup{
    @Prop({required: true})
    firstName:string;

    @Prop({required: true})
    lastName:string;

    @Prop({required: true})
    email:string;

    @Prop({required: true})
    password:string;
}

export const SignupSchema = SchemaFactory.createForClass(Signup);