// import { loadStripe } from '@stripe/stripe-js'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import contactRoutes from './routes/contactRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import productRoutes from './routes/productRoutes.js'
import requestRoutes from './routes/requestRoutes.js'
import userRoutes from './routes/userRoutes.js'

// const stripe = await loadStripe(
//   'pk_test_51M1uU6DlGuSOO9hwVj3UDh5KeWmujkZJYZZSJILQXCtY0q7QJHPUq6RveQpduosvfVNTBEQCNY0mD3YFMcg6senn00xOaqDtWk'
// )

dotenv.config()

const app = express()
connectDB()

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
app.use('/contacts', contactRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/requests', requestRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

// app.get('/client-secret', async (req, res) => {
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 1000,
//     currency: 'usd',
//   })
//   res.json({ clientSecret: paymentIntent.client_secret })
// })

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
