import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(cors({
    origin: process.env.CORS_OROGIN,
    credentials: true
}))
app.use(express.json({limit:"20kb"})) //used to limit the input value by the user
app.use(express.urlencoded({limit:"20kb", extended: true})) //used to handle encoded urls{eg: for spaces and other characters}
app.use(express.static("public")) //used to store files in personal server like images or pdfs
app.use(cookieParser()) //used to handle cookies from user's browser 

//routes import
import userRoute from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/user", userRoute)

export {app}