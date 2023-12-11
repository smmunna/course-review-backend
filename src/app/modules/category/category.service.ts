import categoryModel from "./category.model";
import Category from "./category.interface";

const createCategoryToDB = async (category: Category) => {
    const result = await categoryModel.create(category)
    return result
}

const getllAllCategory = async () => {
    const result = await categoryModel.find()
    return result
}

export const categoryService = {
    createCategoryToDB,
    getllAllCategory,
}