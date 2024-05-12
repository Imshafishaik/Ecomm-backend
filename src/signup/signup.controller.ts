import { Body, Controller,Get,Param,Post,Res } from "@nestjs/common";
import { SignupService } from "./signup.service";
import { ForgotPasswordDto, LoginDto, signupDto } from "./dto/signup.dto";
import * as bcrypt from 'bcrypt';


@Controller('/register')
export class SignupController {
    constructor(private readonly signupService: SignupService){}

    @Post('/signup')
    async createSignup(@Body() signupData:signupDto){
        const SALT = 10;
        const hashedPassword = await bcrypt.hash(signupData.password, SALT);
        // console.log("...........hashedPassword",hashedPassword)
        return this.signupService.createSignup(signupData,hashedPassword)
    }

    @Post('/login')
    loginUser(@Body() loginData: LoginDto){
        return this.signupService.loginUser(loginData)
    }

    @Get('/users')
    getUsers(){
        return this.signupService.getUsers()
    }

    // @Get('/send-mail')
    // sendMail(@Res() response: any){
    //     const mail = this.signupService.sendMail()
        
    //     return response.status(200).json({
    //         message: 'success',
    //         mail,
    //       });
    // }

    @Post('/forgot-password/:email')
    forgotPassword(@Param('email') email: string, @Body() forgotPasswordDto: ForgotPasswordDto) {
        return this.signupService.forgotPassword(email,forgotPasswordDto)
    }
}