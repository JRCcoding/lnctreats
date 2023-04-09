import mongoose from 'mongoose'

const requestSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: false,
    //   ref: 'User',
    //   number: { type: String, required: false },
    // },
    size: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    qty: {
      type: String,
      required: false,
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
    number: {
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
