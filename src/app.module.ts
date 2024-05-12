import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { CollectionsModule } from './collection/collection.module';
import { CategoryModule } from './categories/category/category.module';
import { SubCategoryModule } from './categories/subcategory/subcategory.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),  
    MongooseModule.forRoot('mongodb://127.0.0.1/e-comm'),SignupModule,CollectionsModule,CategoryModule,SubCategoryModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
