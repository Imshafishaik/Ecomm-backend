import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Products, ProductsSchema,  } from "./schema/products.schema";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { SubCategory } from "../categories/schema/subcategory.schema";
import { SubCategorySchema } from "../categories/schema/subcategory.schema";


@Module({
    imports:[MongooseModule.forFeature(
        [
          {
            name: Products.name,
            schema: ProductsSchema
          },
          {
            name: SubCategory.name,
            schema: SubCategorySchema
          }
        ]
    )],
    controllers: [ProductsController],
    providers: [ProductsService],
})

export class ProductsModule {}