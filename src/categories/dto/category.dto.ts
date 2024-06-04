import { IsNotEmpty, IsString } from "class-validator";

export class CategoryDto{
    @IsNotEmpty()
    @IsString()
    name: string;
}

export class SubCategoryDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    categoryId: string;
}