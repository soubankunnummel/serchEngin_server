
 
import  mongoose,  { Schema } from 'mongoose'


 const productSchema = new Schema({
    title: String,
    desc:String,
    price:String
 })

 const Product = mongoose.model('Product', productSchema)

 export default Product