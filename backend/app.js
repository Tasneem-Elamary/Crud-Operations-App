import express from 'express'
import userRouter from './routes/user.route.js'
import productRouter from './routes/product.route.js'
import cors from 'cors'
const app = express()
app.use(express.json())

app.use(cors())

app.use(userRouter)
app.use(productRouter)
app.get("*", (req, res, next) => {
    res.json({ message: "404 Not Found" })
})
app.listen(3000, () => {
    console.log("Running.............");
})