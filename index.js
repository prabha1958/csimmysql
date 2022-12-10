import express from "express"
import authRouter from "./routes/auth.js"

const app = express()
app.use(express.json())
app.use("/trumpetMajor1978", express.static("images"))

app.use("/api/auth/", authRouter)
app.listen(8800,()=>{
    console.log("the server is working")
})