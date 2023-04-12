import asyncHandler from 'express-async-handler'
import Request from '../models/requestModel.js'

// @desc    Create new request
// @route   POST /api/requests
// @access  Private
const addRequestInfo = asyncHandler(async (req, res) => {
  const { size, qty, date, additional, name, email, number, edibleImage } =
    req.body

  if (req.body && req.body.length === 0) {
    // res.status(400)
    // throw new Error('No request items')
    // return
    const request = new Request({
      size,
      qty,
      date,
      additional,
      name,
      email,
      number,
      edibleImage,
    })
    const createdRequest = await request.save()

    res.status(201).json(createdRequest)
  } else {
    const request = new Request({
      size,
      qty,
      date,
      additional,
      name,
      email,
      number,
      edibleImage,
    })

    const createdRequest = await request.save()

    res.status(201).json(createdRequest)
  }
})

// @desc    Get request by ID
// @route   GET /api/requests/:id
// @access  Private
const getRequestById = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id).populate(
    'user',
    'name email number'
  )

  if (request) {
    res.json(request)
  } else {
    res.status(404)
    throw new Error('Request not found')
  }
})

// @desc    Update request to paid
// @route   GET /api/requests/:id/pay
// @access  Private
const updateRequestToPaid = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id)

  if (request) {
    request.isPaid = true
    request.paidAt = Date.now()
    request.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
    }

    const updatedRequest = await request.save()

    res.json(updatedRequest)
  } else {
    res.status(404)
    throw new Error('Request not found')
  }
})

// @desc    Update request to delivered
// @route   GET /api/requests/:id/deliver
// @access  Private/Admin
const updateRequestToDelivered = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id)

  if (request) {
    request.isDelivered = true
    request.deliveredAt = Date.now()

    const updatedRequest = await request.save()

    res.json(updatedRequest)
  } else {
    res.status(404)
    throw new Error('Request not found')
  }
})

// @desc    Get logged in user requests
// @route   GET /api/requests/myrequests
// @access  Private
const getMyRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({ user: req.user._id })
  res.json(requests)
})

// @desc    Get all requests
// @route   GET /api/requests
// @access  Private/Admin
const getRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({}).populate('user', 'id name')
  res.json(requests)
})

const deleteRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id)

  if (request) {
    const updatedRequest = await request.delete()

    res.json(updatedRequest)
  } else {
    res.status(404)
    throw new Error('Request not found')
  }
})
export {
  addRequestInfo,
  getRequestById,
  updateRequestToPaid,
  updateRequestToDelivered,
  getMyRequests,
  getRequests,
  deleteRequest,
}
