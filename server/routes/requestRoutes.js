import express from 'express'
const router = express.Router()
import {
  addRequestInfo,
  getRequestById,
  updateRequestToPaid,
  updateRequestToDelivered,
  getMyRequests,
  getRequests,
  deleteRequest,
} from '../controllers/requestController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(addRequestInfo).get(getRequests)
router.route('/myrequests').get(protect, getMyRequests)
router.route('/:id').get(protect, getRequestById)
router.route('/:id/pay').put(updateRequestToPaid, admin)
router.route('/:id/deliver').put(protect, admin, updateRequestToDelivered)
router.route('/:id/delete').delete(protect, admin, deleteRequest)

export default router
