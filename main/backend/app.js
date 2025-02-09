import express from "express";
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//Routes import
import postRouter from "./routes/post.routes.js"
import formRouter from "./routes/form.routes.js"

//Routes Declaration
app.use("/api/v1/post", postRouter)
app.use("/api/v1/forms", formRouter)

export { app }