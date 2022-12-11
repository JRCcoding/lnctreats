import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import products from './routes/productRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import colors from 'colors'

dotenv.config()

const app = express()
connectDB()
// app.use((req, res, next) => {
//   const error = new Error(`Not Found - ${req.originalUrl}`)
//   res.status(404)
//   next(error)
// })

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

app.use('/api/products', products)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running...')
//   })
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}
const PORT = process.env.PORT || 10000

app.listen(
  PORT,

  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
  )
)
