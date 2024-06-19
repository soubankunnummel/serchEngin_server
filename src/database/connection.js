import mongoose from 'mongoose'
import config from '../config/index.js'

const {DB_URL} = config

export const connection  = async () => {
    try {
        const connect = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`databse connecte to:`,connect.connection.host)
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
}



