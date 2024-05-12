import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubCategory, SubCategorySchema } from "../schema/subcategory.schema";
import { SubCategoryController } from "./subcategory.controller";
import { SubCategoryService } from "./subcategory.service";

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: SubCategory.name,
            schema: SubCategorySchema
        }])],
        controllers: [SubCategoryController],
        providers: [SubCategoryService]
})

export class SubCategoryModule{}