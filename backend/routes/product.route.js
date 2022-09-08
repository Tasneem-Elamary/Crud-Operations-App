import { Router } from 'express';
import { addProduct, deleteProduct, getProductByName, updateProduct,getProduct } from '../controllers/product.controller.js'
const router = Router()



router.post("/product", addProduct)
router.get("/product", getProductByName)
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)
router.get("/product/:id", getProduct)
//router.get("/product", allProducts)

export default router