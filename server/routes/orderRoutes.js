import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
  deleteOrder,
} from '../controllers/orderController.js'
import { getRequests } from '../controllers/requestController.js'

router.route('/').post(addOrderItems).get(getOrders, getRequests)
router.route('/myorders').get(getMyOrders)
router.route('/:id').get(getOrderById)
router.route('/:id/pay').put(updateOrderToPaid)
router.route('/:id/deliver').put(updateOrderToDelivered)
router.route('/:id/delete').delete(deleteOrder)

export default router
