import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Collection, CollectionSchema,  } from "./schema/collection.schema";
import { CollectionService } from "./collection.service";
import { ProductsController } from "./collection.controller";


@Module({
    imports:[MongooseModule.forFeature([{
        name: Collection.name,
        schema: CollectionSchema
    }])],
    controllers: [ProductsController],
    providers: [CollectionService],
})

export class CollectionsModule {}