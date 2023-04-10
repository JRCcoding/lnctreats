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
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(updateOrderToPaid, admin)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)
router.route('/:id/delete').delete(protect, admin, deleteOrder)

export default router
