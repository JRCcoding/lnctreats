import asyncHandler from 'async-handler'
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
import Request from '../models/requestModel.js'

router.route('/').post(addRequestInfo).get(getRequests)
router.route('/myrequests').get(protect, getMyRequests)
router.route('/:id').get(
  protect,
  getRequestById,
  asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params.id)

    if (request) {
      res.json(request)
    } else {
      res.status(404).json({ message: 'Error in routes / Request not found' })
    }
  })
)
// router.route('/:id').get(protect, getRequestById)
router.route('/:id/pay').put(updateRequestToPaid, admin)
router.route('/:id/deliver').put(protect, admin, updateRequestToDelivered)
router.route('/:id/delete').delete(protect, admin, deleteRequest)

export default router
