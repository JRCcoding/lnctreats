import mongoose from 'mongoose'

const requestSchema = mongoose.Schema(
  {
    // request: { type: mongoose.Schema.Types.ObjectId, required: true },
    size: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
    },
    qty: {
      type: String,
      required: true,
    },
    additional: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Request = mongoose.model('Request', requestSchema)

export default Request
