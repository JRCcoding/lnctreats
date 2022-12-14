import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
  })
)
router.get(
  '/:id',
  asyncHandler(async (request, res) => {
    const product = await Product.findById(request.params.id).then().catch()

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)
export default router
