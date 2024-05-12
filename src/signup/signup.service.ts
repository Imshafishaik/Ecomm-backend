import { Injectable } from "@nestjs/common";
import { MailerService } from '@nestjs-modules/mailer';
import { Signup } from "./schema/signup.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ForgotPasswordDto, LoginDto, signupDto } from "./dto/signup.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { sign } from "crypto";


@Injectable()
export class SignupService{
    constructor(@InjectModel(Signup.name) private readonly signupModel:Model <Signup>, private jwtService: JwtService, private readonly mailService: MailerService){}

    createSignup(signupData: signupDto,
        hashedPassword: string
        ){
        console.log("..........signupData,",signupData,
        // hashedPassword
        )
        const user = new this.signupModel({email:signupData.email, password:hashedPassword, firstName:signupData.firstName, lastName:signupData.lastName})
        const result = user.save()

        const payload = { email: signupData.email, password: hashedPassword, privateKey: process.env.SECRET_KEY }
        return {
            access_token : this.jwtService.sign(payload)
        }
    }

    async loginUser(loginData: LoginDto){

        const userData = await this.signupModel.findOne({email: loginData.email})

        if(!userData){
            return "User with following email not exists."
        }

        const validPassword = await bcrypt.compare(loginData.password,userData.password)

        if(!validPassword){
            return "Invalid Password!"
        }

        if(userData && validPassword){
        let payload = {email: userData.email, user_id: userData._id}
        return {
            access_token: this.jwtService.sign(payload)
        }
        }
    }

    async getUsers(){
        const users = await this.signupModel.find();
        return {data:users}
    }

    // async sendMail(){
    //     const message = `Forgot your password? If you didn't forget your password, please ignore this email!`;

    //     this.mailService.sendMail({
    //     from: 'shafimern01@gmail.com',
    //     to: 'shafimern@gmail.com',
    //     subject: `How to Send Emails with Nodemailer`,
    //     text: message,
    //     html: '<b>Here is your code: 123456</b>'
    //     });
    // }

    async forgotPassword(email:string, forgotPasswordDto: ForgotPasswordDto){

        const user = await this.signupModel.findOne({ email: email})

        if(!user){
            return "No user found with this details..."
        }
        

        const passwordMatch = await bcrypt.compare(forgotPasswordDto.oldPassword, user.password)

        if(passwordMatch && user){
            const newPassword = await bcrypt.hash(forgotPasswordDto.newPassword, 10)
            const updatedUser = await this.signupModel.findOneAndUpdate({email: email}, {password:newPassword})
            return "Password Updated Successfully..."
        }
    }
}