import express from "express"
import cors from 'cors'
import productRoutes from "./api/product.js";


 export const Routes = async (app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());


    // api
    productRoutes(app)

}