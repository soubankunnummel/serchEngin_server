import ProductRepo from "../database/repository/product.rep.js";
import { APIError } from "../utils/app.error.js";
import { FormateData } from "../utils/index.js";

class ProductService {
  constructor() {
    this.repo = new ProductRepo();
  }

  async AddProduct(productInputs) {
    try {
      const product = await this.repo.CreateProduct(productInputs);

      return FormateData(product);
    } catch (error) {
      throw new APIError("Data Not found");
    }
  }

  async FindProducts(qurey){
    try {
        const product = await this.repo.Products(qurey)
        return FormateData(product)
    } catch (error) {
        throw new APIError("Data Not found");
    }
  }
}

export default ProductService;
