import express from "express"
import cors from "cors"
//import { middleware } from "express"
import cookieParser from "cookie-parser"
const app = express()

app.use(
    cors({ 
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)
//common middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({ extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/user.routes.js"
import { errorHandler } from "./middlewares/errors.midleware.js"
//routes 
app.use("/api/v1/healthcheck", healthcheckRouter)//route we are serving on is /api/v1/healthcheck , and then healthcheckRouter takes care
app.use("/api/v1/users", userRouter)

//app.use(errorHandler)

export { app }