import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Signup, SignupSchema } from "./schema/signup.schema";
import { SignupController } from "./signup.controller";
import { SignupService } from "./signup.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({ secret: 'secretKey', signOptions:{ expiresIn:'60s' } }),MongooseModule.forFeature([{
        name: Signup.name,
        schema: SignupSchema
    }])],
    controllers: [SignupController],
    providers: [SignupService],
})

export class SignupModule{}