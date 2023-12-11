import { Schema, model } from "mongoose";
import Category from "./category.interface";


const categorySchema = new Schema<Category>({
    name: { type: String, required: true }
})

const categoryModel = model<Category>('category', categorySchema)

export default categoryModel;