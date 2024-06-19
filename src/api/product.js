import ProductService from "../service/product.service.js"



export const productRoutes = (app) => {

    const service = new ProductService()

    app.post('/product/create', async(req, res, next) => {
        try {
            const {title, desc, price} = req.body

            const {data} = await service.AddProduct({title,desc, price})

            return res.json(data)
        } catch (error) {
            next(error)
        }
    })


    app.get('/product', async (req, res, next) => {
        try {
          if (Object.keys(req.query).length === 0) {
            return res.status(400).json({ error: 'No query parameters provided' });
          }
      
          const { data } = await service.FindProducts(req.query);
          return res.json(data);
        } catch (error) {
          next(error);   
        }
      });
      


}

export default productRoutes