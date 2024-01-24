import 'dotenv/config'
import connectDB from "./db/index.js";
import { app } from './app.js';


connectDB()
.then(()=>{
    app.listen(`${process.env.PORT}`||8000,()=>{
        console.log(`👻Server Started at PORT: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("DB connection failed!!",err)
})