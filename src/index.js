
import express from 'express'
import config from './config/index.js'
import { connection } from './database/connection.js'
import { Routes } from './express.app.js'
 
const {PORT} = config

const startServer = async () => {

    const app = express()

    // database connection
    await connection()


    //routes
    await Routes(app)
    

    app.listen(PORT, () => {
        console.log(`server rinnig  on port: ${PORT}`)
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })

}


startServer()