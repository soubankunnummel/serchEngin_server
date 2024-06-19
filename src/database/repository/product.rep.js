import { APIError } from "../../utils/app.error.js"
import Product from "../models/product.model.js"



class ProductRepo {

    async CreateProduct ({title, desc, price}){
console.log(price)

        try {
            const product = new Product({
                title,
                desc,
                price
            })

            const newProduct = await product.save()

            return newProduct
        } catch (error) {

            throw new APIError(
                "API Error",
                STATUS_CODES.INTERNAL_ERROR,
                "Unable to Create Product"
            )
        }
    }


    // get prodcuts by qury

    async Products(qurey){

        try {
            const regexQuery = {
                title: { $regex: new RegExp(qurey.search, 'i') }  
            };
            const product = Product.find(regexQuery)


            return product
        } catch (error) {
            throw new APIError(
                "API Error",
                STATUS_CODES.INTERNAL_ERROR,
                "Unable to Find Product" 
            )
        }


    }

}

export default ProductRepo