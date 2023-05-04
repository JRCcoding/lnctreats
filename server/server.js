import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import requestRoutes from './routes/requestRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import path from 'path'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'

import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
connectDB()
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS,
  },
})
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`)
})
app.post('/send', function (req, res) {
  var mailOptions = {
    from: `${req.body.formState.email}`,
    to: process.env.GMAIL_EMAIL,
    subject: `Message from: ${req.body.formState.email}, ${req.body.formState.number}`,
    text: `${req.body.formState.message}`,
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: 'fail',
      })
    } else {
      console.log('=== MESSAGE SENT ===')
      res.json({
        status: 'success',
      })
    }
  })
})
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})
const __dirname = path.resolve()
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/requests', requestRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}
const PORT = process.env.PORT || 10000

app.use(notFound)
app.use(errorHandler)
app.listen(
  PORT,

  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
  )
)
