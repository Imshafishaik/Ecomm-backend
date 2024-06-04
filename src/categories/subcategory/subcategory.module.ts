import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubCategory, SubCategorySchema } from "../schema/subcategory.schema";
import { SubCategoryController } from "./subcategory.controller";
import { SubCategoryService } from "./subcategory.service";
import { Category, CategorySchema } from "../schema/category.schema";

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: SubCategory.name,
            schema: SubCategorySchema
        },
        {
            name: Category.name,
            schema: CategorySchema
        }
    ])],
        controllers: [SubCategoryController],
        providers: [SubCategoryService]
})

export class SubCategoryModule{}